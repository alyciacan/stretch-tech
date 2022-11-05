import './MemeCard.css';


const MemeCard = ({ img, memeTitle, memeId, getDeletedMeme }) => {
   const background = {
    backgroundImage: `url(${ img })`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom'
};

const title = {
    inlineSize: "20rem",
    wordBreak: "break-all"
}
    return (
        <div className="meme-card" style={ background }>
            <h3 style={title} className="memeTitle">{ memeTitle }</h3>
            <span className="meme-delete-button"type='button' onClick={()=> getDeletedMeme(memeId)}>&#10060;</span>
        </div>
    )
}

export default MemeCard;