import GalleryCard from '../GalleryCard/GalleryCard';
import styles  from './Gallery.module.css'

function Gallery({ galleryCardInfo }) {
    return (
        <div className={styles.gallery}>  
            <div className={styles.galleryInner}>
                <div className={styles.galleryTrack}>
                    {galleryCardInfo?.map((c) => { return (
                        <div className={styles.cardContainer}>
                            <GalleryCard {...c}/>                      
                        </div>
                    );})}
                </div>
            </div>
        </div>
    );
  }

  
export default Gallery;