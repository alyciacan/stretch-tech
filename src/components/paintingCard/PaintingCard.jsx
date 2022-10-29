import React from 'react'
import './PaintingCard.css'

const PaintingCard = ({url, name, id}) => {  
    return (
      <section className='cards-container'>
        <img className='images' src={url} />
        <p className='card-titles'>{name}</p>
        {/* <p>{ FORMTEXT }</p> */}
        {/* <button onClick={}>Delete</button> */}
      </section>
    );
}

export default PaintingCard