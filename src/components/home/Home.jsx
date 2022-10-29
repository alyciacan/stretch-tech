import React, { useState, useEffect } from "react";
import { getAllArt } from "../../apiCalls";
import PaintingCard from '../paintingCard/PaintingCard'
import individualPainting from '../individualPainting/IndividualPainting'
import "./Home.css";

const Home = () => {
  const [images, setImages] = useState([]);
    useEffect(() => {
      const getImages = () => {
        getAllArt().then(response => {
          setImages(response.artObjects)
        })      
    };
    getImages();
  }, []);

  const allCards = images.map((image) => {
    const { url } = image.webImage
    const { name, id } = image
      return (
        <PaintingCard
          url={url}
          name={name}
          id={id}
          key={id}
        />
      )
  })
 
  return (
    <section className="description-container">
      <div className="description">
        <h1>Art Gallery</h1>
        <p>
        Art Party is how the most sophisticated, discerning art history buffs get their meme jollies.  Simply click on your favorite oeuvre to get started!" <br/> <span className="right-arrow"> &#8594; </span>
        </p>
      </div>
      <div className="images-container">
        {allCards}
      </div>
    </section>
  );
};

export default Home;
