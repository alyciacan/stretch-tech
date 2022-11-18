import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { getSinglePainting } from "../../apiCalls";
import "./IndividualPainting.css";
import { MemeContext } from "../../contexts/MemeContext";
import Form from "../form/Form";
import { Link } from "react-router-dom";
import home from "../../images/home.png";

const IndividualPainting = ({ selectedId }) => {
  const [paintingObject, setPaintingObject] = useState({});
  const [memeTitle, setMemeTitle] = useState("");
  const [textColor, setTextColor] = useState({ color: "white" });
  const error = useHistory();

  useEffect(() => {
    const findPainting = () => {
      getSinglePainting(selectedId)
        .then((response) => {
          const obj = {
            id: response.artObject.id,
            title: response.artObject.title,
            description: response.artObject.label.description,
            img: response.artObject.webImage.url,
            artist: response.artObject.principalMakers[0].name,
            year: response.artObject.dating.presentingDate,
          };
          setPaintingObject(obj);
        })
        .catch(() => error.push("/error"));
    };
    findPainting();
  }, []);

  const { id, title, description, img, artist, year } = paintingObject;
  const { memes, setMemes } = useContext(MemeContext);

  const getMemeTitle = (memeTitle) => {
    setMemeTitle(memeTitle);
  };

  const saveMeme = () => {
    setMemes([{ memeTitle, img, memeId: Date.now(), textColor }, ...memes]);
    setMemeTitle("");
  };

  if (!id) {
    return <h3 className="loading-text">Loading...</h3>;
  } else {
    return (
      <section className="individual-painting">
        <React.Fragment>
          <Link to="/" className="home-button">
            <img src={home} alt="Home button" role="button" />
          </Link>
          <div className="panting-title-container">
            <img className="individual-painting-img" src={img} alt={title} />
            <p className="meme-title" style={textColor}>
              {memeTitle}
            </p>
          </div>
          <div className=".painting-details">
            <h1 className="individual-painting-title">{title}</h1>
            <h2 className="individual-painting-artist">
              Artist: {artist} | {year}
            </h2>
            <p className="individual-painting-description">{description}</p>
            <div className="meme-form">
              <Form
                saveMeme={saveMeme}
                getMemeTitle={getMemeTitle}
                setTextColor={setTextColor}
                textColor={textColor}
              />
            </div>
          </div>
        </React.Fragment>
      </section>
    );
  }
};

export default IndividualPainting;
