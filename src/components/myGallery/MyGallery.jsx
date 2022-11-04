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

  const myMemes = memes.map((meme) => {
    return (
      <MemeCard
        getDeletedMeme={getDeletedMeme}
        memeId={meme.memeId}
        img={meme.img}
        memeTitle={meme.memeTitle}
        key={meme.memeId}
      />
    );
  });

  const userPrompt = (
    <p>
      No memes yet! Make some <Link to="/home">here</Link>!
    </p>
  );

  // const checkForMemes = () => {
  //     memes.length ? memes : userPrompt
  // }
  return (
    <section className="my-gallery">
      <Link to="/">
        <span className="home-button" type="button">
          <img src={home} alt="Home" />
        </span>
      </Link>
      {myMemes}
    </section>
  );
};

export default MyGallery;
