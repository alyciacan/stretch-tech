import React from 'react'
import './PaintingCard.css'

const PaintingCard = ({}) => {
  return (
      <section className='individual-painting' id={artObject.label.id}>
        <img className='individual-painting-img' alt={artObject.label.title} src={artObject.webImage.url}/>
        <div className='painting-details'>
        <h1 className='individual-painting-title'>{artObject.title}</h1>
        <h2 className='individual-painting-author'>{artObject.principalMakers[0].name}</h2>
        <p className='individual-painting-description'>{artObject.label.description}</p>
        <p className='individual-painting-date'>{artObject.label.date}</p>
        </div>
      </section> 
  )
}

export default PaintingCard