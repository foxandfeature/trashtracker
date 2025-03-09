async function loadLocations() {
    let locations = []
    let response = await fetch("locations.csv");
    if (response.status != 200) {
        throw new Error("Server Error");
    }
    let text_data = await response.text();
    console.log(text_data)
    text_data.split("\n").forEach(function (value) {
        let coordinates = value.split(";")
        locations.push(L.latLng(Number(coordinates[0]), Number(coordinates[1])));
    })
    let markers = []
    locations.forEach(function (value) {
        markers.push(L.marker(value, { icon: trashcanIcon }));
    })
    L.layerGroup(markers).addTo(map);
}
loadLocations()


/*= [{
    "type": "Point",
    "coordinates": [9.783225081686828, 52.28165009176988]
}];*/