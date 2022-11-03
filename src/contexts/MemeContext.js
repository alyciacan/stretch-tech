import { createContext, useState, useEffect } from 'react';

export const MemeContext = createContext({
 memes: null,
 setMemes: () => null
});

export const MemeProvider = ({ children }) => {
    const [memes, setMemes] = useState(() => {
        const localData = localStorage.getItem('memes');
        return localData ? JSON.parse(localData) : []
    } ); //sets localstorage value to either what exists previously on localstorage or empty array
    const value = {memes, setMemes}

    useEffect(() => {//useEffect will invoke every time the data updates!
        localStorage.setItem('memes', JSON.stringify(memes))
    }, [memes]) //will run whenever [memes] changes

    return (
        <MemeContext.Provider value={ value }>{ children }</MemeContext.Provider>
    )
}

