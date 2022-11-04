import React, { useState } from "react";
import "./Form.css"

const Form = ({getMemeTitle}) => {
  const [sentence, setSentence] = useState("");

  const handleChange = (event) => {
    setSentence(event.currentTarget.value);
    getMemeTitle(event.currentTarget.value)
  };

  const handleMax = () => {
    const maxLength = 50 - sentence.length
    return maxLength
  }

  const handleColor = () => {
    if(handleMax() < 20){
        return ({
            color: "red"
        })
    }
  }
 
  return (
    <form>
      <input maxLength={50} className="meme-input"
        value={sentence}
        type="text"
        placeholder="Enter text here"
        onChange={(event) => handleChange(event)}
      />
      {sentence.length > 0 && <span style={handleColor()}> Remaining Characters: {handleMax()} </span> }
     </form>
  );
};

export default Form;
