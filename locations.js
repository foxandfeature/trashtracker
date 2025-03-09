var locations
async function loadLocations(path) {
    let response = await fetch("locations.csv");
    if (response.status != 200) {
        throw new Error("Server Error");
    }
    let text_data = await response.text();
    text_data.split("\n").forEach(function (value) {
        var coordinates = value.split(";")
        locations.push(L.latLng(Number(coordinates[0]), Number(coordinates[1])));
    })
    return text_data;
}
loadLocations()


/*= [{
    "type": "Point",
    "coordinates": [9.783225081686828, 52.28165009176988]
}];*/