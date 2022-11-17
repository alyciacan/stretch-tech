const API_key = process.env.REACT_APP_API_KEY;

const checkResponse = (response) => {
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		return response.json();
	} 

const getAllArt = () => {
	return fetch(`https://www.rijksmuseum.nl/api/en/collection?key=${API_key}&ps=80&type=painting`)
		.then(response => checkResponse(response))
};

const getSinglePainting = (id) => {
	return fetch(`https://www.rijksmuseum.nl/api/en/collection/${id}?key=${API_key}`)
	.then(response => checkResponse(response))
};

export { getAllArt, getSinglePainting };
