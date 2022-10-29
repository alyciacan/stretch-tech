import './ArtCard.css';

const ArtCard = (props) => {
    //add function to delete this card and trigger a re-render of MyGallery

    return (
        <section>
            <img src={ props.img } />
            <p>{ props.memeText }</p>
            <button onClick={}>Delete</button>
        </section>
    )
};

export default ArtCard;