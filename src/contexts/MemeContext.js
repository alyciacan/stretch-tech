import { createContext, useState } from 'react';

const MemeContext = createContext();

export const MemeProvider = ({ children }) => {
    const [memes, setMemes] = useState([]);
    const value = {memes, setMemes}

    return (
        <MemeContext.Provider value={ value }>
            { children }
        </MemeContext.Provider>
    )
}

export default MemeContext;