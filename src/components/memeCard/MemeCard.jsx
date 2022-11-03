import './MemeCard.css';


const MemeCard = ({ img, memeTitle }) => {
   console.log(memeTitle)
   const background = {
    backgroundImage: `url(${ img })`,
    backgroundSize: '25vw',
    backgroundRepeat: 'no-repeat'
    
};
    return (
        <div className="meme-card" style={ background }>
            <h3 className="meme-title">{ memeTitle }</h3>
        </div>
    )
}

export default MemeCard;