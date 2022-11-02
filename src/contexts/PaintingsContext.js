import { createContext, useState } from 'react';

export const PaintingsContext = createContext({
    paintings: null
});

export const PaintingsProvider = ({ children }) => {
    const [paintings, setPaintings] = useState([]);
    const value = { paintings, setPaintings };

    return <PaintingsContext.Provider value={ value }>{ children }</PaintingsContext.Provider>
}
