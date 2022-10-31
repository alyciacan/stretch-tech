import React, { useState, useEffect } from 'react'
import { getSinglePainting } from '../../apiCalls';
import './IndividualPainting.css'


const IndividualPainting = ({selectedId}) => {
  const [paintingObject, setPaintingObject] = useState({});
  useEffect(() => {
    const findPainting = () => {
    getSinglePainting(selectedId)
      .then(response => {
        console.log(response)
        setPaintingObject(response.artObject)
        })
        // .then(response => {

        // })
    }
    findPainting()
  }, []);
  console.log(paintingObject);

  // setDetails = () => {
  //   const { id , title, description, date } = image
  //   const { url } = image.artObject.webImage
  //   const { name } = image.artObject.principalMakers
  //   const year = String(date).split('-')[0]
  // };


  return (
    <section className='individual-painting'>
      <h1 className='individual-painting-title'>Title: {paintingObject.title}</h1>
      {/* <img className='individual-painting-img' alt={paintingObject.title} /> */}
      {/* <div className='painting-details'>

        <h2 className='individual-painting-author'>Author: {name}</h2>
        <p className='individual-painting-description'>{description}</p>
        <p className='individual-painting-date'>Year: {year}</p>
      </div> */}
    </section> 
  )

}

export default IndividualPainting;