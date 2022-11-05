import "./MyGallery.css";
import MemeCard from "../memeCard/MemeCard";
import { MemeContext } from "../../contexts/MemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import home from "../../images/home.png"

const MyGallery = () => {
  const { memes, setMemes } = useContext(MemeContext);

  const getDeletedMeme = (clickedMemeId) => {
    const copyOfMemes = [...memes];
    const filtered = copyOfMemes.filter(
      (meme) => meme.memeId !== clickedMemeId
    );
    setMemes(filtered);
  };

    const myMemes = memes.map(meme => {
        return (<MemeCard 
            getDeletedMeme={getDeletedMeme}
            memeId={meme.memeId}
            img={meme.img}
            memeTitle={meme.memeTitle}
            key={meme.memeId}
            />
            )
    })

    const userPrompt = <h4 className="user-prompt">Did you know that Van Gogh produced 900 paintings in just 10 years? And you haven't made a single meme! <Link to="/" className="user-prompt">Get to work!</Link></h4>

    const checkForMemes = () => {
        if(myMemes.length) {
            return myMemes;
        } else {
            return userPrompt;
        }
    }

    return (
        <section className='my-gallery'>
            <Link to="/" className="home-button">
                <img src={home} alt="Home" />
            </Link>
            { checkForMemes() }
        </section>
    )
};

export default MyGallery;
