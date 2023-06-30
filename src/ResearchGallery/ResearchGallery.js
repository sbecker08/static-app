import Gallery from "../Gallery/Gallery";
import GalleryHeaderCard from "../modules/Cards/GalleryHeaderCard/GalleryHeaderCard";
import GalleryNewsCard from "../modules/Cards/GalleryNewsCard/GalleryNewsCard";

function ResearchGallery() {
    
    return (
        <Gallery>
            {[ 
                <div key="00">
                    <GalleryHeaderCard 
                        superHeader="Recent News & Events"
                        header="The Latest News Impacting Your Investment"
                        bodyText="Stay informed with the news and events impacting your investment strategy."
                        buttonOneText="View All PNW News & Events"
                        buttonTwoText="View All News & Events"
                        ></GalleryHeaderCard>
                </div>,
                <div key="1">
                    <GalleryNewsCard 
                        imageUrl="https://www.marcusmillichap.com/-/media/Images/MM/MM%20News%20and%20Events/USPNW/Press/2023/Auburn%20Retail%20Center.jpg?h=2550&iar=0&w=3405&rev=b6dcd149b62542cd8602c1af872ba0d4&hash=2F30450C58079E3B449BDB5E36E1F3E9"
                        date="June 28, 2023"
                        description="Marcus & Millichap announced today the sale of Auburn Retail Center, a 14,775-square foot retail property located in Auburn, WA"
                        title="Marcus & Millichap Arranges the Sale of a 14,775-Square Foot Retail Property"
                        type="Research Brief"
                    />                      
                </div>
            ]}
        </Gallery>
    );
  }

  
export default ResearchGallery;
