import './MyGallery.css';
import PaintingCard from '../paintingCard/PaintingCard';
import { useContext } from 'react';
import { MemeContext } from '../../contexts/MemeContext';

const MyGallery = () => {
    const { memes } = useContext(MemeContext)
    const myMemes = memes.map(meme => {
        console.log(meme)
        return <div>
                    <img src={ meme.img } />
                    <h2>{ meme.memeTitle }</h2>
                </div>
    })
    console.log(memes)
    return (
        <section className='my-gallery'>
            { myMemes }
        </section>
    )
};


export default MyGallery;