import React, { Component } from 'react'
import './PaintingCard.css'

const PaintingCard = () => {
  return (
      <section className='individual-painting' id={PaintingCard.id}>
        <img className='individual-painting-img' alt={artObject.label.title} src={artObject.webImage.url}/>
        <div className='painting-details'>
        <h1 className='individual-painting-title'>{artObject.label.description}</h1>
        <h2 className='painting-author'>{artObject.principalMakers[0].name}</h2>
        <p className='individual-painting-description'>{artObject.label.description}</p>
        </div>
      </section> 
  )
}

export default PaintingCard