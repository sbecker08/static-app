import Gallery from "../Gallery/Gallery";
import GalleryHeaderCard from "../modules/Cards/GalleryHeaderCard/GalleryHeaderCard";
import GalleryPropertyCard from "../modules/Cards/GalleryPropertyCard/GalleryPropertyCard";

function PropertyGallery({ galleryCardInfo }) {
    
    return (
        <Gallery>
            {[ 
                <div key="1000">
                    <GalleryHeaderCard 
                        superHeader="Current Pacific Northwest Listings"
                        header="Your Property Search Start Here"
                        bodyText="Finding the right investment opportunity is easy when choosing from the industry’s largest, most diverse collection of exclusive commercial real estate listings. Start your search now."
                        buttonOneText="View Available PNW Listings"
                        buttonTwoText="View Available U.S. & Canada Listings"
                        ></GalleryHeaderCard>
                </div>,
                ...galleryCardInfo?.map((c, i) => { return (
                        <div key={i}>
                            <GalleryPropertyCard {...c}/>                      
                        </div>        
                );}),
                ...galleryCardInfo?.map((c, i) => { return (
                        <div key={i + 100}>
                            <GalleryPropertyCard {...c}/>                      
                        </div>
                );}) 
            ]}
        </Gallery>
    );
  }

  
export default PropertyGallery;