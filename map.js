var map = L.map('map', { zoomControl: false }).setView([52.265160276113164, 9.761516161742293], 15);
var userLocation = null
let locationMarker = null

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function onLocationFound(e) {
    userLocation = e.latlng
    if (locationMarker == null) {
        locationMarker = L.marker(userLocation, { icon: locationIcon })
        locationMarker.addTo(map)
        let locationMarkerIcon = document.getElementById("location-marker-icon")
        locationMarkerIcon.style.transform = `translate(-50%, -50%) rotate(${-90}deg)`;
    }
    else {
        locationMarker.setLatLng(userLocation)
    }
}
map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}
map.on('locationerror', onLocationError);

function locate() {
    map.locate({ watch: true, enableHighAccuracy: true });
}
locate()

L.geoJSON(locations, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: trashcanIcon })
    }
}).addTo(map);