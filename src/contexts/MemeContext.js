import { createContext, useState } from 'react';

export const MemeContext = createContext({
 memes: null,
 setMemes: () => null
});

export const MemeProvider = ({ children }) => {
    const [memes, setMemes] = useState([]);
    const value = {memes, setMemes}

    return (
        <MemeContext.Provider value={ value }>{ children }</MemeContext.Provider>
    )
}

