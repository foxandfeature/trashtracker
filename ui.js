document.getElementById('location-button').onclick = function () {
    if (userLocation == null) {
        locate()
    }
    else {
        map.flyTo(userLocation, 18)
    }
}