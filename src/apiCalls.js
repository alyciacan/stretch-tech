const checkResponse = (response) => {
	if (!response.ok) {
		console.log("not ok!")
		throw Error(response.statusText);
	}
	return response;
}

const getAllArt = () => {
	return fetch("https://www.rijksmuseum.nl/api/en/collection?key=AgQXh8Og&involvedMaker=Rembrandt+van+Rijn")
		.then(response => checkResponse(response))
		.then(response => response.json());
};

const getSinglePainting = (id) => {
	return fetch(`https://www.rijksmuseum.nl/api/en/collection/${id}?key=AgQXh8Og`)
	.then(response => checkResponse(response))
	.then(response => response.json());
};

export { getAllArt, getSinglePainting };
