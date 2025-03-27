async function loadLocations() {
    const response = await fetch('locations.csv');
    if (response.status != 200) {
        throw new Error('Server Error');
    }
    const text_data = await response.text();
    var markers = L.featureGroup();
    text_data.split('\n').forEach(function (value, idx) {
        if (idx != 0) {
            const content = value.split(',')
            const marker = L.marker(L.latLng(Number(content[2]), Number(content[3])), { icon: trashcanIcon })
            markers.addLayer(marker);
            marker.bindPopup(function (layer) {
                const divElement = document.createElement('div')
                divElement.id = 'popup-div'
                const textElement = document.createElement('p')
                textElement.id = 'popup-title'
                textElement.appendChild(document.createTextNode(content[1]))
                divElement.appendChild(textElement)
                if (content[4] == 'true') {
                    loadImg(content[0], divElement)
                }
                return divElement
            }, { minWidth: 0, autoPanPaddingTopLeft: L.point(20, 70), autoPanPaddingBottomRight: L.point(20, 90) })
        }
    })
    map.addLayer(markers);
}
loadLocations()

async function loadImg(id, container) {
    const imgDivElement = document.createElement('div')
    imgDivElement.id = 'popup-img-div'
    container.appendChild(imgDivElement)
    let response = await fetch('photos/' + id + '.jpg')
    const imageBlob = await response.blob();
    const imageUrl = URL.createObjectURL(imageBlob);
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.id = 'popup-img'
    imgDivElement.appendChild(imgElement);
    setTimeout(function () {
        imgDivElement.style.animation = 'none';
    }, 500);

}