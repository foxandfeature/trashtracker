var map = L.map('map', { zoomControl: false }).setView([52.265160276113164, 9.761516161742293], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.locate({ setView: true });

function onLocationFound(e) {
    L.marker(e.latlng).addTo(map)
}
map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}
map.on('locationerror', onLocationError);

var icon = L.icon({
    iconUrl: 'trash-can.png',
    iconSize:     [30, 30],
    iconAnchor:   [15, 15],
});

L.geoJSON(locations, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: icon})
    }
}).addTo(map);