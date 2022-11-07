import React, { useState } from "react";
import "./Form.css";

const Form = ({ getMemeTitle, saveMeme }) => {
  const [sentence, setSentence] = useState("");

  const handleChange = (event) => {
    setSentence(event.currentTarget.value);
    getMemeTitle(event.currentTarget.value);
  };

  const handleMax = () => {
    const maxLength = 50 - sentence.length
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
  }

  return (
      <form className="form-container">
        <div className="container">        
          <input
          maxLength={50}
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
          onClick={() => clearForm()}
        >
          Save Meme
        </button>
      </form>
  );
};

export default Form;
