import React, { useState, useEffect, useContext } from 'react'
import { getSinglePainting } from '../../apiCalls';
import './IndividualPainting.css'
import { MemeContext } from '../../contexts/MemeContext'
import Form from '../form/Form';



const IndividualPainting = ({ selectedId }) => {
  const [paintingObject, setPaintingObject] = useState({});
  const [memeTitle, setMemeTitle] = useState("")

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

  const getMemeTitle = (memeTitle) => {
    setMemeTitle(memeTitle)
  };

  const saveMeme = () => {
    setMemes([{memeTitle, img, id}, ...memes]);
    setMemeTitle("")
  };

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
          <section className="meme-form">
            <Form getMemeTitle={getMemeTitle}/>
            <button className="meme-save-button" type="button" onClick={() => setMemes([{memeTitle, img, id}, ...memes]) }>Save Meme</button>
          </section>
        </div>
      </section> 
    )
  }
}

export default IndividualPainting;