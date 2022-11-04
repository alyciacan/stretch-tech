import './MyGallery.css';
import MemeCard from '../memeCard/MemeCard';
import { MemeContext } from '../../contexts/MemeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

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

    const userPrompt = <p>No memes yet! Make some <Link to="/home">here</Link>!</p>

    const checkForMemes = () => {
        memes.length ? memes : userPrompt
    }
    return (
        <section className='my-gallery'>
            { myMemes }
        </section>
    )
};


export default MyGallery;