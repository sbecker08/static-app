import Gallery from "../Gallery/Gallery";
import GalleryHeaderCard from "../modules/Cards/GalleryHeaderCard/GalleryHeaderCard";
import GalleryNewsCard from "../modules/Cards/GalleryNewsCard/GalleryNewsCard";

function NewsGallery() {
    
    return (
        <Gallery>
            {[ 
                <div key="00">
                    <GalleryHeaderCard 
                        superHeader="Recent Pacific Northwest Research"
                        header="Essential Market Insights"
                        bodyText="Marcus & Millichap’s research services division is dedicated to providing our clients with cutting-edge market research and innovative insights. Browse our recent reports and videos focused on your areas of interest."
                        buttonOneText="View All PNW Research"
                        buttonTwoText="View All U.S. & Canada Research"
                        ></GalleryHeaderCard>
                </div>,
                <div key="1">
                    <GalleryNewsCard 
                        imageUrl="https://www.marcusmillichap.com/-/media/Images/MM/MM%20Research/Special%20Report/Housing5%20jpg.jpg?h=515&iar=0&w=945&rev=6aa4018f49164f60b4b7dc989798284a&hash=63D23B3077F5D499FCE152E2364E08B5"
                        date="June 2023"
                        description=""
                        title="Housing"
                        type="Research Brief"
                    />                      
                </div>
            ]}
        </Gallery>
    );
  }

  
export default NewsGallery;
