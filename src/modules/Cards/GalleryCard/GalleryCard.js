import styles  from './GalleryCard.module.css'
import Image from 'next/image';

function GalleryCard({ children }) {

    return (
        <div className={styles.galleryCard}>      
            { children }
        </div>
    );
  }
  
export default GalleryCard;

