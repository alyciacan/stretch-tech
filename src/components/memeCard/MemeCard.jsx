import './MemeCard.css';


const MemeCard = ({ img, memeTitle, memeId, getDeletedMeme }) => {
   const background = {
    backgroundImage: `url(${ img })`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom'
    
};
    return (
        <div className="meme-card" style={ background }>
            <h3 className="meme-title">{ memeTitle }</h3>
            <span className="meme-delete-button"type='button' onClick={()=> getDeletedMeme(memeId)}>&#10060;</span>
        </div>
    )
}

export default MemeCard;