import React from 'react'
import './PaintingCard.css'
import {Link} from 'react-router-dom'

const PaintingCard = ({url, name, id, memeText}) => {
    return (
      <Link to={`/IndividualPainting/${id}`} className='cards-container'>
        <img className='images' alt={'Artists Painting'} id={id} src={url} />
        <p className='card-titles'>{name}</p>
        <p className="memeTitle">{memeText}</p>
      </Link>
    );
}

export default PaintingCard