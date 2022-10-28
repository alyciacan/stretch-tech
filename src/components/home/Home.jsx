import { getAllArt, getSinglePainting } from '../../apiCalls';
import { useEffect } from 'react';


const Home = () => {
    useEffect(() => {
        getAllArt();
        getSinglePainting('SK-C-5')
    })
}

export default Home;