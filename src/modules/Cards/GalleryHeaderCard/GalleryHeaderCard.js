import ButtonPrimary from '../../Buttons/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../../Buttons/ButtonSecondary/ButtonSecondary';
import GalleryCard from '../GalleryCard/GalleryCard';

function GalleryHeaderCard({ superHeader, header, bodyText, buttonOneText, buttonTwoText }) {

    return (
        <GalleryCard>
            <div className="px-6 frank-ruhl flex flex-col h-full">      
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
        </GalleryCard>
    );
  }
  
export default GalleryHeaderCard;

