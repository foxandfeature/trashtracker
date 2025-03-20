var map = L.map('map', { zoomControl: false }).setView([52.265160276113164, 9.761516161742293], 12);
var userLocation = null
let locationMarker = null

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var firstUSerLocationZoom = true
function onLocationFound(e) {
    userLocation = e.latlng
    if (firstUSerLocationZoom) {
        firstUSerLocationZoom = false
        map.setView(userLocation, 18, { animate: true })
    }
    if (locationMarker == null) {
        locationMarker = L.marker(userLocation, { icon: locationIcon, zIndexOffset: 1000 })
        locationMarker.addTo(map)
    }
    else {
        locationMarker.setLatLng(userLocation)
    }
}
map.on('locationfound', onLocationFound);

function onLocationError(e) {
    console.log(e.message);
}
map.on('locationerror', onLocationError);

function locate() {
    map.locate({ watch: true, enableHighAccuracy: true });
}
locate()