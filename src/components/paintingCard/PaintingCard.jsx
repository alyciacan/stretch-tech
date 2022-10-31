import React from 'react'
import './PaintingCard.css'

const PaintingCard = ({url, name, id, cb}) => {
    return (
      <a className='cards-container' onClick={cb}>
        <img className='images' id={id} src={url} />
        <p className='card-titles'>{name}</p>
      </a>
    );
}

export default PaintingCard