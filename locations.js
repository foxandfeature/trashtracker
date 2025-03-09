async function loadFile(path) {
	let response = await fetch(path);
	if(response.status != 200) {
		throw new Error("Server Error");
	}
	let text_data = await response.text();
    console.log(text_data)
	return text_data;
}
loadFile("locations.csv")

const locations = [{
    "type": "Point",
    "coordinates": [9.783225081686828, 52.28165009176988]
}];