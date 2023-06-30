import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import styles  from './GalleryHeaderCard.module.css'

function GalleryHeaderCard({ superHeader, header, bodyText, buttonOneText, buttonTwoText }) {

    return (
        <div className={styles.galleryCard + " px-6 frank-ruhl flex flex-col"}>      
            <h4 className="text-mm-orange mt-10 uppercase font-medium text-xs tracking-widest roboto">
                {superHeader}
            </h4>
            <h2 className="text-mm-blue text-4xl font-black py-5 mt-3">
                {header}
            </h2>
            <div className="text-mm-blue">
                {bodyText}
            </div>
            <div className="mt-auto mb-12" >
                <ButtonPrimary className="w-full mb-3" text={buttonOneText} link={'#'} ></ButtonPrimary>                
                <ButtonSecondary className="w-full" text={buttonTwoText} link={'#'} ></ButtonSecondary>
            </div>
        </div>
    );
  }
  
export default GalleryHeaderCard;

