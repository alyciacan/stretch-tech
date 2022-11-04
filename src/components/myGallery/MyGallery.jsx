import './MyGallery.css';
import MemeCard from '../memeCard/MemeCard';
import { MemeContext } from '../../contexts/MemeContext';
import { useContext } from 'react';

const MyGallery = () => {
    const { memes, setMemes } = useContext(MemeContext)



    const getDeletedMeme = (clickedMemeId) => {
        const copyOfMemes = [...memes]
        const filtered = copyOfMemes.filter(meme => meme.memeId !== clickedMemeId)
        setMemes(filtered)
    }

    const myMemes = memes.map(meme => {
        return (<MemeCard 
            getDeletedMeme={getDeletedMeme}
            memeId={meme.memeId}
            img={meme.img}
            memeTitle={meme.memeTitle}
            key={meme.memeId}
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