import React from 'react'
import './PaintingCard.css'

const PaintingCard = () => {
  const { id , title, description, date } = artObject.label
  const { url } = artObject.webImage

  return (
    <div className='painting-card' id={} >
    <img className='card-imgs' src={url} alt={} />
    <h3 className='card-titles'>{}</h3>
    </div>
  )
}

export default PaintingCard