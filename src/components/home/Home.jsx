import React, { useState, useEffect } from "react";
import { getAllArt } from "../../apiCalls";
import { getSinglePainting } from "../../apiCalls.js"
import PaintingCard from '../paintingCard/PaintingCard'
import IndividualPainting from '../individualPainting/IndividualPainting'
import "./Home.css";

const Home = () => {
  const [images, setImages] = useState([]);
  const [selectedPainting, setPainting] = useState(null)
  useEffect(() => {
    const getImages = () => {
      getAllArt().then(response => {
        setImages(response.artObjects)
      })      
    };
    getImages();
  }, []);

	const handleClick = async (evt) => {
    setPainting(evt.target.id)
    console.log(evt.target.id)
		let response = await getSinglePainting(evt.target.id)		
	}

  return (
    <section className="description-container">
      <div className="description">
        <h1>Art Gallery</h1>
        <p>
        Art Party is how the most sophisticated, discerning art history buffs get their meme jollies.  Simply click on your favorite oeuvre to get started!" <br/> <span className="right-arrow"> &#8594; </span>
        </p>
      </div>
      { selectedPainting !== null ? <IndividualPainting selectedId={selectedPainting} /> : 
      <div className="images-container">
        {images && images?.map(image => {
					const { url } = image.webImage
					const { name, objectNumber } = image
						return (
							<PaintingCard
								url={url}
								name={name}
								id={objectNumber}
								key={objectNumber}
								cb={handleClick}
							/>  
						)
					
				})}
      </div>
}
    </section>
  );
};

export default Home;