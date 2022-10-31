import React, { useState, useEffect } from 'react'
import { getSinglePainting } from '../../apiCalls';
import './IndividualPainting.css'


const IndividualPainting = ({selectedId}) => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    const findPainting = () => {
    getSinglePainting(selectedId).then(response => {
      setImage(response.artObject)
      })
    }
    findPainting()
  }, []);
  console.log('image', image)
    // const displayArt = () => {
    //   const { id , title, description, date } = artObject.label
    //   const { url } = artObject.webImage
    //   const { name } = artObject.principalMakers

  // const year = String(date).split('-')[0]

  return (
    <section className='individual-painting'>
      {/* <img className='individual-painting-img' alt={title} src={url}/>
      <div className='painting-details'>
        <h1 className='individual-painting-title'>Title: {title}</h1>
        <h2 className='individual-painting-author'>Author: {name}</h2>
        <p className='individual-painting-description'>{description}</p>
        <p className='individual-painting-date'>Year: {year}</p>
      </div> */}
    </section> 
  )
}
// }

export default IndividualPainting