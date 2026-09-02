import g1 from './assets/gallery/g1.jpg'
import g2 from './assets/gallery/g2.jpg'
import g3 from './assets/gallery/g3.jpg'
import g4 from './assets/gallery/g4.jpg'

function Gallery() {
    return (
        <>
            <style>
                {`
                .gallery {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    width: 80%;
                    gap: 10px;
                    margin: 0 auto;
                }

                .gallery img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    display: block;
                }

                @media (max-width: 700px) {
                    .gallery {
                        grid-template-columns: repeat(2, 1fr);
                        width: 90%;
                    }
                }
                `}
            </style>

            <div className="gallery">
                <img src={g1} alt="Gallery 1" />
                <img src={g2} alt="Gallery 2" />
                <img src={g3} alt="Gallery 3" />
                <img src={g4} alt="Gallery 4" />
            </div>
        </>
    )
}

export default Gallery