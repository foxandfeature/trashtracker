async function loadLocations() {
    const response = await fetch('locations.csv');
    if (response.status != 200) {
        throw new Error('Server Error');
    }
    const text_data = await response.text();
    var markers = L.markerClusterGroup({maxClusterRadius:30});
    text_data.split('\n').forEach(function (value) {
        if (value.charAt(0) != '#') {
            const content = value.split(';')
            const marker = L.marker(L.latLng(Number(content[1]), Number(content[2])), { icon: trashcanIcon })
            markers.addLayer(marker);
            marker.bindPopup(function (layer) {
                const divElement = document.createElement('div')
                divElement.id = 'popup-div'
                loadPopUpContent(content[0], divElement)
                return divElement
            }, { minWidth: 200, autoPanPadding: L.point(20, 20) })
        }
    })
    map.addLayer(markers);
}
loadLocations()

async function loadPopUpContent(id, container) {
    let response = await fetch('photos/' + id + '.jpg')
    if (!response.ok) {
        const spanElement = document.createElement('span')
        spanElement.appendChild(document.createTextNode('Für diesen Mülleimer ist leider noch kein Foto verfügbar'));
        container.appendChild(spanElement)
    }
    else {
        const imageBlob = await response.blob();
        const imageUrl = URL.createObjectURL(imageBlob);
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.id = 'popup-img'
        container.appendChild(imgElement);
    }
}