const locationIcon = L.divIcon({
    className: "location-marker-div",
    html: "<img id=\"location-marker-icon\" src=\"icons\\location_marker.svg\"><img id=\"direction-marker-icon\" src=\"icons\\direction_marker.svg\"></img></img>"
});
const trashcanIcon = L.icon({
    iconUrl: 'icons/trashcan_marker.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
});