import PaintingCard from '../paintingCard/PaintingCard'
import "./Home.css";

const Home = ({images, handleClick}) => {

  const paintings = images.map(image => {
    const { url } = image.webImage
    const { name, objectNumber } = image
      return (
        <PaintingCard
          url={url}
          name={name}
          id={objectNumber}
          key={objectNumber}
          cb={handleClick}
        />  
      )
  })

  return (
    <section className="description-container">
      <div className="description">
        <h2>Art Party </h2>
        <p>is how the most sophisticated, discerning art history buffs get their meme jollies.  
          Simply click on your favorite oeuvre to get started!</p>
          <br/> 
        <h3 className="right-arrow">Let's make some memes! &#8594;</h3>
      </div>
      <div className="images-container">
        { paintings }
      </div>
    </section>
  );
};

export default Home;