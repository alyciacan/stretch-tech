import React, { useState, useEffect } from "react";
import { getAllArt } from "../../apiCalls";
import PaintingCard from '../paintingCard/PaintingCard'

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
 
  return (
    <section className="description-container">
      <div className="description">
        <h1>Art Gallery</h1>
        <p>
          Preserved defective offending he daughters on or. Rejoiced prospect
          yet material servants out answered men admitted. Sportsmen certainty
          prevailed suspected am as. Add stairs admire all answer the nearer yet
          length. Advantages prosperous remarkably my inhabiting so reasonably
          be if. Too any appearance announcing impossible one. Out mrs means
          heart ham tears shall power every. <br/> <span className="right-arrow"> &#8594; </span>
        </p>
      </div>
      <div className="images-container">
        <PaintingCard images={images}/>
      </div>
    </section>
  );
};

export default Home;
