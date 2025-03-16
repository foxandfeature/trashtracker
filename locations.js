async function loadLocations() {
    let response = await fetch('locations.csv');
    if (response.status != 200) {
        throw new Error('Server Error');
    }
    let text_data = await response.text();
    let markers = []
    text_data.split('\n').forEach(function (value) {
        if (value.charAt(0) != '#') {
            let content = value.split(';')
            let marker = L.marker(L.latLng(Number(content[1]), Number(content[2])), { icon: trashcanIcon })
            markers.push(marker);
            marker.bindPopup(async function (layer) {
                return await getMarkerContent(content[0])
            }, { minWidth: 200, autoPanPadding: L.point(20, 20) })
        }
    })
    L.layerGroup(markers).addTo(map);
}
loadLocations()

async function getMarkerContent(id, layer) {
    let response = await fetch('photos/' + content[0] + '.svg')
    if (!response.ok) {
        return 'Für diesen Mülleimer ist leider noch kein Foto verfügbar';
    }
    const imageBlob = await response.blob();
    const imageUrl = URL.createObjectURL(imageBlob);
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    return imgElement;
}