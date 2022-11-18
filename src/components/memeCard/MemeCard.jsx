import './MemeCard.css';
import { useState } from 'react';


const MemeCard = ({ img, memeTitle, memeId, getDeletedMeme, textColor }) => {
    const [isShown, setIsShown] =useState(false)
   const background = {
    backgroundImage: `url(${ img })`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom'
};

    return (
        <div onMouseEnter={()=>setIsShown(true)} onMouseLeave={()=> setIsShown(false) } className="meme-card" style={ background }>
            <h3 className="memeTitle" style={ textColor }>{ memeTitle }</h3>
           {isShown !== false && <span className="meme-delete-button"type='button' onClick={()=> getDeletedMeme(memeId)}>&#10060;</span>  }
        </div>
    )
};

export default MemeCard;