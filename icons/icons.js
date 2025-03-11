const locationMarkerDiv = document.createElement("div");
const locationMarkerImg = document.createElement("img");
locationMarkerImg.id = "location-marker-icon"
locationMarkerImg.src = "icons/location_marker.svg"
const directionMarkerimg = document.createElement("img");
directionMarkerimg.id = "direction-marker-icon"
directionMarkerimg.src = "icons/direction_marker.svg"
locationMarkerDiv.appendChild(locationMarkerImg)
locationMarkerDiv.appendChild(directionMarkerimg);

const locationIcon = L.divIcon({
    className: "location-marker-div",
    html: locationMarkerDiv
});
const trashcanIcon = L.icon({
    iconUrl: 'icons/trashcan_marker.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
});