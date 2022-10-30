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
  return fetch(
    "https://www.rijksmuseum.nl/api/en/collection?key=AgQXh8Og&involvedMaker=Rembrandt+van+Rijn"
  ).then((response) => checkResponse(response));
};

const getSinglePainting = (id) => {
  return fetch(
    `https://www.rijksmuseum.nl/api/en/collection/${id}?key=AgQXh8Og`, {
      mode: 'no-cors',
      credentials: 'same-origin',
      headers: {
        'Access-Control-Allow-Origin': `https://www.rijksmuseum.nl/api/en/collection/${id}?key=AgQXh8Og`
      }
    }
  )
  // .then((response) => checkResponse(response));
  .then(response => console.log(response))
};

export { getAllArt, getSinglePainting };
