import styles from './GalleryNewsCard.module.css'
import GalleryImageCard from '../GalleryImageCard/GalleryImageCard';

function GalleryNewsCard({ imageUrl, type, title, description, date }) {

    return (
        <GalleryImageCard imageUrl={imageUrl} superHeader={type} header={title}>     
            <div className={styles.bodySection}>
                { 
                description ?
                    <p className="flex">
                        <span className="m-0">{description}</span>
                    </p> 
                    : 
                    <></>
                }
                { 
                date ?
                    <p className="mt-4 flex">
                        <span className="m-0 text-mm-orange">-</span><span>{date}</span>
                    </p>
                    : 
                    <></>
                }
            </div>
        </GalleryImageCard>
    );
  }
  
export default GalleryNewsCard;