import React, { useState } from "react";
import "./Form.css"

const Form = () => {
  const [sentence, setSentence] = useState("");

  const handleChange = (event) => {
    setSentence(event.currentTarget.value);
  };

  return (
    <form className="form-container">
      <input className="meme-input"
        value={sentence}
        type="text"
        placeholder="Enter text here"
        onChange={(event) => handleChange(event)}
      />
      <button className=" meme-save-button">Save Meme</button>
    </form>
  );
};

export default Form;
