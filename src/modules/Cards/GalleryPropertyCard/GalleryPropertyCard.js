import styles  from './GalleryPropertyCard.module.css'
import GalleryImageCard from '../GalleryImageCard/GalleryImageCard';
import Image from 'next/image';

function GalleryPropertyCard({ imageUrl, propertyType, propertyName, location, unitDetails, capRate, price }) {

    return (
        <GalleryImageCard imageUrl={imageUrl} superHeader={propertyType} header={propertyName}>     
            <div className={styles.bodySection}>
                <p className="flex">
                    <Image src='/iconLocation.svg' width={12} height={17} alt="Location Icon" /><span>{location}</span>
                </p>
                <p className="flex">
                    <Image src='/iconUnits.svg' width={12} height={17} alt="Units Icon" /><span>{unitDetails}</span>
                </p>
                <p className="flex">
                    <Image src='/iconCaprate.svg' width={12} height={17} alt="CapRate Icon" /><span>{capRate}</span>
                </p>
                <p className={styles.price}>
                    {price}
                </p>
            </div>
        </GalleryImageCard>
    );
  }
  
export default GalleryPropertyCard;