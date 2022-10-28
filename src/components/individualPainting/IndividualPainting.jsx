import React from 'react'
import './IndividualPainting.css'

const PaintingCard = () => {
  const { id , title, description, date } = artObject.label
  const { url } = artObject.webImage
  const { name } = artObject.principalMakers

  const year = String(date).split('-')[0]

  return (
      <section className='individual-painting' id={id}>
        <img className='individual-painting-img' alt={title} src={url}/>
        <div className='painting-details'>
        <h1 className='individual-painting-title'>{title}</h1>
        <h2 className='individual-painting-author'>{name}</h2>
        <p className='individual-painting-description'>{description}</p>
        <p className='individual-painting-date'>{year}</p>
        </div>
      </section> 
  )
}

export default PaintingCard