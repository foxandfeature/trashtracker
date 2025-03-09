document.getElementById("location-button").onclick = function () {
    shouldzoomToUserLocation = true
    if (userLocation == null) {
        locate()
    }
    else {
        map.flyTo(userLocation, 18)
    }
}