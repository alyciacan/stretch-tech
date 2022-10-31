import React, { useState, useEffect } from 'react'
import { getSinglePainting } from '../../apiCalls';
import './IndividualPainting.css'


const IndividualPainting = ({selectedId}) => {
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

  return (
    <section className='individual-painting'>
      <h1 className='individual-painting-title'>Title: {title}</h1>
      <img className='individual-painting-img' src={img} alt={title}/>
      <h2 className='individual-painting-author'>Artist: {artist}</h2>
      <p className='individual-painting-description'>{description}</p>
      <p className='individual-painting-date'>Year: {year}</p>
    </section> 
  )

}

export default IndividualPainting;