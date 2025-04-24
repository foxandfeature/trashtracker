const locationMarkerDiv = document.createElement('div');
const locationMarkerImg = document.createElement('img');
locationMarkerImg.id = 'location-marker-icon'
locationMarkerImg.src = 'icons/location_marker.svg'
const directionMarkerImg = document.createElement('img');
directionMarkerImg.id = 'direction-marker-icon'
directionMarkerImg.src = 'icons/direction_marker.svg'
locationMarkerDiv.appendChild(locationMarkerImg)
locationMarkerDiv.appendChild(directionMarkerImg);

const locationIcon = L.divIcon({
    className: 'location-marker-div',
    html: locationMarkerDiv
});
const trashcanIcon = L.icon({
    iconUrl: 'icons/trashcan_marker.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
});