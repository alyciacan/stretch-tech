import React from 'react'
import './PaintingCard.css'

const PaintingCard = ({images}) => {
  const allImages = images.map((image) => {
    const {url} = image.webImage
    const {id, title} = image
    return (
    <div className='image'>
    <img key={id} className="images" src={url}/>
    <p className='card-titles'>{title}</p>
    </div>
    )
});

  return (
    <div className='cards-container'>
      {allImages}
    </div>
  )
}

export default PaintingCard