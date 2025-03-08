var shouldzoomToUserLocation = false
document.getElementById("locationButton").onclick = function () {
    shouldzoomToUserLocation = true
    if (userLocation == null) {
        map.locate({ watch: true, enableHighAccuracy: true});
    }
    else{
        zoomToUserLocation()
    }
}

function zoomToUserLocation(){
    if (shouldzoomToUserLocation){
        map.flyTo(userLocation, 16)
        shouldzoomToUserLocation = false
    }
    
}