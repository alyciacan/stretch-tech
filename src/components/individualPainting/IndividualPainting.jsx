import React, { useState, useEffect, useContext } from 'react'
import { getSinglePainting } from '../../apiCalls';
import './IndividualPainting.css'
import { MemeContext } from '../../contexts/MemeContext'
import { PaintingsContext } from '../../contexts/PaintingsContext';


const IndividualPainting = ({selectedId, memeTitle}) => {
  //check id against existing ids in gallery array(move array onto GSM)
  const { paintings } = useContext(PaintingsContext);
  
  const [paintingObject, setPaintingObject] = useState({});
  useEffect(() => {
    const findPainting = () => {
    getSinglePainting(selectedId)
      .then(response => {
        const obj = {
          id: response.artObject.id,
          title: response.artObject.title, 
          description: response.artObject.label.description,
          img: response.artObject.webImage.url,
          artist: response.artObject.principalMakers[0].name,
          year: response.artObject.dating.presentingDate
        }
        setPaintingObject(obj)
        })
    }
    findPainting()
  }, []);

  const { id, title, description, img, artist, year } = paintingObject;
  const { memes, setMemes } = useContext(MemeContext);

  return (
    <section className='individual-painting'>
      <img className='individual-painting-img' src={img} alt={title}/>
      <div className='.painting-details'>
        <h1 className='individual-painting-title'>{title}</h1>
        <h2 className='individual-painting-artist'>Artist: {artist} | {year}</h2>
        <p className='individual-painting-description'>{description}</p>
        <p className="memeTitle">{memeTitle}</p>
        <button className=" meme-save-button" type="button" onClick={() => setMemes([{memeTitle, img, id}, ...memes]) }>Save Meme</button>
      </div>
    </section> 
  )
}

export default IndividualPainting;