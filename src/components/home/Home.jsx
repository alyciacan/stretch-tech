import PaintingCard from '../paintingCard/PaintingCard'
import "./Home.css";

const Home = ({images, handleClick}) => {
  return (
    <section className="description-container">
      <div className="description">
        <h2>Art Party </h2>
        <p>is how the most sophisticated, discerning art history buffs get their meme jollies.  
          Simply click on your favorite oeuvre to get started! <br/> 
        <h3 className="right-arrow">Let's make some memes! &#8594;</h3>
        </p>
      </div>
      <div className="images-container">
        {images && images?.map(image => {
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
				})}
      </div>
    </section>
  );
};

export default Home;