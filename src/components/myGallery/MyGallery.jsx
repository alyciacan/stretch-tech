import './MyGallery.css';
import ArtCard from '../artCard/ArtCard';
import { useContext } from 'react';
import { MemeContext } from '../../contexts/MemeContext';

const MyGallery = (arrayOfFavs) => {
    const {memes} = useContext(memeContext)
    const myFavs = arrayOfFavs.map(fav => {
        return <ArtCard 
                    img={ fav.imgURL }
                    memeText={ fav.memeText }
                    key={ fav.id }
                />
    })
    return (
        <section className='my-gallery'>
            { myFavs }
        </section>
    )
};
    return (
        <section className='my-gallery'>
            { allArt }
        </section>
    )
};


export default MyGallery;