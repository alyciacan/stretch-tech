import './MyGallery.css';
import MemeCard from '../memeCard/MemeCard';
import { MemeContext } from '../../contexts/MemeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

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

    const userPrompt = <h4 className="user-prompt">Did you know that Van Gogh produced 900 paintings in just 10 years? And you haven't made a single meme! <Link to="/" className="user-prompt">Get to work!</Link></h4>

    const checkForMemes = () => {
        if(!memes.length) {
            return memes;
        } else {
            return userPrompt;
        }
    }

    return (
        <section className='my-gallery'>
            { checkForMemes() }
        </section>
    )
};


export default MyGallery;