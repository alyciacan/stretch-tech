import { createContext, useState } from 'react';

export const MemeContext = createContext({
 memes: [],
 addMemeToGallery: () => {}
});

export const MemeProvider = ({ children }) => {
    const [memes, setMemes] = useState([{img: 24, title: "Boo"}]);
  
    const addMemeToGallery = (newMeme) => {
        setMemes(...memes, newMeme)
    }
    const value = {memes, setMemes, addMemeToGallery}

    return (
        <MemeContext.Provider value={ value }>
            { children }
        </MemeContext.Provider>
    )
}

