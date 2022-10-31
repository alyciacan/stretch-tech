const checkResponse = (response) => {
  // if(!Response.ok) {
  //     throw new Error(
  //         `Error: ${response.status}`
  //     )
  // }
  // console.log(response)
  return response.json();
};

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
      console.log('data', data)
      return data
    })
	} catch (error) {
		console.log(error);
	}
};



export { getAllArt, getSinglePainting };
