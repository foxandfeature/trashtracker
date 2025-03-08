var map = L.map('map', { zoomControl: false }).setView([52.265160276113164, 9.761516161742293], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var userLocation = null
var locationMarker = null

function onLocationFound(e) {
    userLocation = e.latlng
    zoomToUserLocation()
    if (locationMarker == null){
        locationMarker = L.marker(userLocation, { icon: locationIcon })
        locationMarker.addTo(map)
    }   
    else{
        locationMarker.setLatLng(userLocation)
    }
}
map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}
map.on('locationerror', onLocationError);

L.geoJSON(locations, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: trashcanIcon })
    }
}).addTo(map);