import styles  from './GalleryCard.module.css'
import Image from 'next/image';

function GalleryCard({ imageUrl, propertyType, propertyName, location, unitDetails, capRate, price }) {

    return (
        <div className={styles.galleryCard}>      
            <Image src={imageUrl} width={368} height={200} alt="Property Photo" className={styles.cardImage} />
            <div className={styles.headerSection}>
                <h2 className={styles.propertyType}>{propertyType}</h2>
                <h1 className={styles.propertyName}>{propertyName}</h1>
            </div>
            <div className={styles.bodySection}>
                <p className={styles.location}>
                    <Image src='/iconLocation.svg' width={12} height={17} alt="Location Icon" /><span>{location}</span>
                </p>
                <p className={styles.detail}>
                    <Image src='/iconUnits.svg' width={12} height={17} alt="Units Icon" /><span>{unitDetails}</span>
                </p>
                <p className={styles.capRate}>
                    <Image src='/iconCaprate.svg' width={12} height={17} alt="CapRate Icon" /><span>{capRate}</span>
                </p>
                <p className={styles.price}>
                    {price}
                </p>
            </div>
        </div>
    );
  }
  
export default GalleryCard;

