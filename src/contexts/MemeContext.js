import { createContext, useState, useEffect } from 'react';

export const MemeContext = createContext();

export const MemeProvider = ({ children }) => {
    const [memes, setMemes] = useState(() => {
        const localData = localStorage.getItem('memes');
        return localData ? JSON.parse(localData) : []
    } );
    const value = {memes, setMemes}

    useEffect(() => {
        localStorage.setItem('memes', JSON.stringify(memes))
    }, [memes])

    return (
        <MemeContext.Provider value={ value }>{ children }</MemeContext.Provider>
    )
}

