import React, { useState } from "react";
import "./Form.css";

const Form = ({ getMemeTitle, saveMeme, setTextColor, textColor }) => {
  const [sentence, setSentence] = useState("");

  const handleChange = (event) => {
    setSentence(event.currentTarget.value);
    getMemeTitle(event.currentTarget.value);
  };

  const handleMax = () => {
    const maxLength = 70 - sentence.length
    return maxLength
  };

  const handleColor = () => {
    if (handleMax() < 20) {
      return {
        color: "red",
      };
    }
  };

  const clearForm = () => {
    saveMeme();
    setSentence("");
  };

  const checkInput = () => {
    if(sentence.length) {
      return (
        <span style={handleColor()}>
          Remaining Characters: {handleMax()}
        </span>
      )
    }
  };

  const toggleTextColor = () => {
    if(textColor.color === 'white') {
      setTextColor({ color: 'black'})
    } else if (textColor.color ==='black') {
      setTextColor({ color: '#FD6A02'})
    } else {
      setTextColor({ color: 'white'})
    }
  };

  return (
      <form className="form-container">
        <div className="container">        
          <input
          maxLength={70}
          className="meme-input"
          value={sentence}
          type="text"
          placeholder="Enter text here"
          onChange={(event) => handleChange(event)}
        />
        { checkInput() }
        </div>
        <button
          disabled={!sentence}
          className="meme-save-button"
          type="button"
          onClick={() => clearForm()} >
          Save Meme
        </button>
        <button
          disabled={!sentence}
          className="text-color-button"
          type="button"
          onClick={() => toggleTextColor()} >
          Change Text Color
        </button>
      </form>
  );
};

export default Form;
