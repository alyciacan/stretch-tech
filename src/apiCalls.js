const getAllArt = () => {
  try {
		return fetch("https://www.rijksmuseum.nl/api/en/collection?key=AgQXh8Og&involvedMaker=Rembrandt+van+Rijn")
		.then(response => response.json())
		.then(data => data)
		
	} catch (error) {
		console.log(error);
	}
};

const getSinglePainting = (id) => {
	try {
		return fetch(`https://www.rijksmuseum.nl/api/en/collection/${id}?key=AgQXh8Og`)
		.then(response => response.json())
		.then(data => { 
      return data
    })
	} catch (error) {
		console.log(error);
	}
};



export { getAllArt, getSinglePainting };
