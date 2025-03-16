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
            marker.bindPopup('<img src=\'photos/'+ content[0] + '.svg\'>', {minWidth:200, autoPanPadding:Point(20, 20)})
        }
    })
    L.layerGroup(markers).addTo(map);
}
loadLocations()