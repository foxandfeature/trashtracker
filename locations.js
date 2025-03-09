async function loadLocations(path) {
	let response = await fetch("locations.csv");
	if(response.status != 200) {
		throw new Error("Server Error");
	}
	let text_data = await response.text();
    text_data.split("\n")
    console.log(text_data.split("\n"))
	return text_data;
}
loadLocations()

const locations = [{
    "type": "Point",
    "coordinates": [9.783225081686828, 52.28165009176988]
}];