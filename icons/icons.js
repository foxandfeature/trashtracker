const locationIcon = L.divIcon({
    className: "location-marker-div",
    html: "<img id=\"location-marker-icon\" src=\"icons\\location_marker.svg\"></img><img id=\"direction-marker-icon\" src=\"icons\\direction_marker.svg\"></img>"
});
const trashcanIcon = L.icon({
    iconUrl: 'icons/trashcan_marker.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
});