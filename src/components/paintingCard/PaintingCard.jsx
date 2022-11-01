import React from 'react'
import './PaintingCard.css'
import {Link} from 'react-router-dom'

const PaintingCard = ({url, name, id}) => {
    return (
      <Link to={`/IndividualPainting/${id}`} className='cards-container'>
        <img className='images' id={id} src={url} />
        <p className='card-titles'>{name}</p>
      </Link>
    );
}

export default PaintingCard