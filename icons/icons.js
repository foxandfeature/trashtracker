let locationIconSpan = document.createElement("span");
locationIconSpan.innerHTML = "class='material-symbols-outlined' style='font-variation-settings: 'FILL' 1; color: dodgerblue;'"
locationIconSpan.appendChild(document.createTextNode("arrow_circle_up"));

const locationIcon = L.divIcon({
    className: "location-marker-div",
    html: "<span class=\"material-symbols-outlined\" id=\"location-marker-icon\">arrow_circle_up</span>"
});
const trashcanIcon = L.icon({
    iconUrl: 'icons/trashcan.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
});