import styles  from './GalleryImageCard.module.css'
import GalleryCard from '../GalleryCard/GalleryCard';
import Image from 'next/image';

function GalleryImageCard({ imageUrl, superHeader, header, children }) {

    return (
        <GalleryCard>     
            <div className={styles.cardImageWrapper}>
                <Image src={imageUrl} width={368} height={200} alt="Property Photo" className={styles.cardImage}  />
            </div>
            <div className={styles.headerSection}>
                <h2 className={styles.superHeader}>{superHeader}</h2>
                <h1 className={styles.header}>{header}</h1>
            </div>
            <div className={styles.bodySection}>
                {children}
            </div>
        </GalleryCard>
    );
  }
  
export default GalleryImageCard;

