import React from 'react';
import { useEffect, useState } from 'react';
import PaintingCard from '../paintingCard/PaintingCard'
import "./Home.css";

const Home = ({images, handleClick}) => {
  const [message, setMessage] = useState("loading...")

  useEffect(() => {
    setTimeout(() => {
      setMessage("Oops, there was an error on our end! Try again later.")
    }, 2000)
  }, [message])

  const checkImages = () => {
    if(images.length) {
      return (
        <React.Fragment>
        <div className="description">
        <h2>Art Party </h2>
        <p>is how the most sophisticated, discerning art history buffs get their meme jollies.  Simply click on your favorite oeuvre to get started! <br/> <span className="right-arrow"> <strong>Let's make some Memes  &#8594;</strong> </span>
        </p>
      </div>
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
          </React.Fragment>
      )
    } else {
      return <h4 className="error-message">{ message }</h4>
    }
  }

  return (
    <section className="description-container">
      {checkImages()}
    </section>
  );
};

export default Home;