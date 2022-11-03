import './MyGallery.css';
import MemeCard from '../memeCard/MemeCard';
import { MemeContext } from '../../contexts/MemeContext';
import { useContext } from 'react';

const MyGallery = () => {
    const { memes } = useContext(MemeContext)
    const myMemes = memes.map(meme => {
        return (<MemeCard 
            img={meme.img}
            memeTitle={meme.memeTitle}
            key={Date.now + meme.memeTitle}
            />
            )
    })
    return (
        <section className='my-gallery'>
            { myMemes }
        </section>
    )
};


export default MyGallery;