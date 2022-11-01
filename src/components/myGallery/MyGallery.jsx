import './MyGallery.css';
import ArtCard from '../artCard/ArtCard';

const MyGallery = (arrayOfFavs) => {
    const myFavs = arrayOfFavs.map(fav => {
        return <ArtCard 
                    img={ fav.imgURL }
                    memeText={ fav.memeText }
                    key={ fav.id }
                />
    })
    return (
        <section className='my-gallery'>
            { myFavs }
        </section>
    )
};
    return (
        <section className='my-gallery'>
            { allArt }
        </section>
    )
};


export default MyGallery;