import React, { useState, useEffect, useContext } from 'react'
import { getSinglePainting } from '../../apiCalls';
import './IndividualPainting.css'
import { MemeContext } from '../../contexts/MemeContext'



const IndividualPainting = ({selectedId, setMemeTitle, memeTitle}) => {
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

  const saveMeme = () => {
    setMemes([{memeTitle, img, memeId: Date.now()}, ...memes])
    setMemeTitle("")
  }

  if(!id) {
    return (
    <h3>Loading...</h3>
  )} else {
    return (
      <section className='individual-painting'>
        <img className='individual-painting-img' src={img} alt={title}/>
        <div className='.painting-details'>
          <h1 className='individual-painting-title'>{title}</h1>
          <h2 className='individual-painting-artist'>Artist: {artist} | {year}</h2>
          <p className='individual-painting-description'>{description}</p>
          <p className="memeTitle">{memeTitle}</p>
          <button className=" meme-save-button" type="button" onClick={() => saveMeme() }>Save Meme</button>
        </div>
      </section> 
    )
  }
}

export default IndividualPainting;