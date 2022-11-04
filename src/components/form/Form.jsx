import React, { useState } from "react";
import "./Form.css";

const Form = ({ getMemeTitle, saveMeme }) => {
  const [sentence, setSentence] = useState("");

  const handleChange = (event) => {
    setSentence(event.currentTarget.value);
    getMemeTitle(event.currentTarget.value);
  };

  const handleMax = () => {
    const maxLength = 30 - sentence.length
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

  return (
    <section className="container">
      <form className="form-container">
        <input
          maxLength={50}
          className="meme-input"
          value={sentence}
          type="text"
          placeholder="Enter text here"
          onChange={(event) => handleChange(event)}
        />
        {sentence.length > 0 && (
          <span style={handleColor()}>
            Remaining Characters: {handleMax()}
          </span>
        )}
      </form>
        <button
          disabled={!sentence}
          className="meme-save-button"
          type="button"
          onClick={() => clearForm()}
        >
          Save Meme
        </button>
    </section>
  );
};

export default Form;
