import GlobalHeader from '../src/GlobalHeader/GlobalHeader';
import IntroWidget from '../src/IntroWidget/IntroWidget';
import RegionalWidget from '../src/RegionalWidget/RegionalWidget';
import RegionalImpact from '../src/RegionalImpact/RegionalImpact';
import GradientBackdrop from '../src/GradientBackdrop/GradientBackdrop'
import PropertyGallery from '../src/PropertyGallery/PropertyGallery';
import NewsGallery from '../src/NewsGallery/NewsGallery';
import ResearchGallery from '../src/ResearchGallery/ResearchGallery';
import CallToActionCard from '../src/modules/Cards/CallToActionCard/CallToActionCard';

import img from '../public/HeroImages/HeroImage1.webp'
import CenterContainer from '../src/modules/LayoutContainers/CenterContainer/CenterContainer';
import ImageBackgroundContainer from '../src/ImageBackgroundContainer/ImageBackgroundContainer';
import ButtonPrimary from '../src/modules/Buttons/ButtonPrimary/ButtonPrimary';
import GlobalFooter from '../src/GlobalFooter/GlobalFooter';

export default function Page() {

    var jsonResponse = JSON.parse('{"data":[{"id":1,"attributes":{"imageUrl":"https://mmimageservice.azurewebsites.net/api/image/property/514364f0-9507-4e47-a236-9890c30389eb/M","propertyType":"Office","propertyName":"Turn Key Dental Office","location":"Portland, OR","unitDetails":"Price/Gross SF: $532.18","capRate":"Cap Rate: 6.04%","price":"Listing Price: $1,075,000","createdAt":"2023-04-28T04:08:23.358Z","updatedAt":"2023-04-28T04:14:12.372Z","publishedAt":"2023-04-28T04:14:12.369Z"}},{"id":2,"attributes":{"imageUrl":"https://mmimageservice.azurewebsites.net/api/image/property/62a481f0-b126-4b6b-ad2b-acd23959b601/M","propertyType":"Net Lease","propertyName":"Popeyes","location":"Kennewick, WA","unitDetails":"Years Remaining On Lease: 18.4","capRate":"Cap Rate: 5.15%","price":"Listing Price: $3,883,495","createdAt":"2023-04-28T04:10:54.384Z","updatedAt":"2023-04-28T04:14:17.105Z","publishedAt":"2023-04-28T04:14:17.102Z"}},{"id":3,"attributes":{"imageUrl":"https://mmimageservice.azurewebsites.net/api/image/property/dc62fffa-67b7-450d-9681-4ea6597206f0/M","propertyType":"Office","propertyName":"Tub & Tan Building","location":"Portland, OR","unitDetails":"Price/Gross SF: $230.00","capRate":"Cap Rate: 7.78%","price":"Listing Price: $1,150,00","createdAt":"2023-04-28T04:12:03.695Z","updatedAt":"2023-04-28T04:14:25.378Z","publishedAt":"2023-04-28T04:14:25.376Z"}},{"id":4,"attributes":{"imageUrl":"https://mmimageservice.azurewebsites.net/api/image/property/38e2185c-db17-4385-9d27-1370e99a0559/M","propertyType":"Apartments","propertyName":"Cedarbrook Apartments","location":"Portland, OR","unitDetails":"Number of Units: 17","capRate":"Cap Rate: 5.55%","price":"Listing Price: $2,750,000","createdAt":"2023-04-28T04:12:59.553Z","updatedAt":"2023-04-28T18:57:59.442Z","publishedAt":"2023-04-28T18:57:59.440Z"}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":4}}}');
    const properties = jsonResponse.data.map(d => d.attributes);

    return (
        <div >
            
            <GlobalHeader />
            <div className='mt-20' ></div>
            <GradientBackdrop backgrounGradientStyle="linear-gradient(to bottom, rgba(0, 40, 85, 0.75) 0%, rgba(0, 40, 85, 0.7) 80%, rgba(0, 40, 85, 0.5) 100%)" backgroundImage={img}>
                <IntroWidget header={'Global Reach, Local Expertise'} subHeader={'Welcome to Marcus & Millichap, the #1 commercial real estate investment sales brokerage and capital markets advisory in North America.'} />
            </GradientBackdrop>
            <RegionalWidget />
            <RegionalImpact />
            <CenterContainer>
                <PropertyGallery galleryCardInfo={properties} />
            </CenterContainer>
            <div className='mb-10' ></div>
            <CenterContainer>
                <ResearchGallery />
            </CenterContainer>
            <div className='mb-10' ></div>
            <CenterContainer>
                <NewsGallery />
            </CenterContainer>
            <CenterContainer>
                <div className="flex lg:space-x-7 max-lg:space-y-7 max-lg:flex-col">
                    <CallToActionCard text="Interested in a Complimentary Valuation" link="#" buttonText="Connect With An Advisor"   backgroundUrl="https://www.marcusmillichap.com/-/media/Images/MM/MM%201031%20Exchange/mm-looking-to-sell-background%20jpg.jpg?rev=2c79b6b10f5a4c1aa066f964bcddce43&hash=D3810DD78DDECDE410A4245C97500529"></CallToActionCard>
                    <CallToActionCard text="Looking for Acquisition Opportunities" link="#" buttonText="Search Listings" backgroundUrl="https://www.marcusmillichap.com/-/media/Images/MM/MM%201031%20Exchange/mm-looking-to-buy-background%20jpg.jpg?rev=53455200e755459f8f04afabd424d40b&hash=D98617E8FAEBE80474BA13FEE5CD5293"></CallToActionCard>
                    <CallToActionCard text="Seeking Financing Options" link="#" buttonText="Connect with an Originator" backgroundUrl="https://www.marcusmillichap.com/-/media/Images/MM/MM%201031%20Exchange/mm-looking-for-debt-financing-background%20jpg.jpg?rev=cbb86ce786eb48679729b04ad9b1b7da&hash=49750DCF7C29C474EC7244405C03AD09"></CallToActionCard>
                </div>
            </CenterContainer>            
            <div className='mb-28' ></div>
            <ImageBackgroundContainer 
                url="https://www.marcusmillichap.com/-/media/Images/MM/MM%201031%20Exchange/mm-1031exchange-hero-background-2880%20jpg/Large%20Display.jpg?rev=844fd7d04eb5456687c6a287ffc25d11&hash=36E67CBDEA0FF896B4AD8A84E2B0E3EB" 
                paddingTop="60px"
                paddingBottom="60px"
                >
                <CenterContainer>
                    <div className="flex flex-col items-center px-36 max-lg:px-0" >
                        <div className="frank-ruhl text-4xl text-mm-blue font-medium text-center" >Looking to Reinvest?</div>
                        <div className="frank-ruhl text-4xl text-mm-blue font-medium text-center">Let Us Help You With Your Next Exchange</div>
                        <div className="w-20 my-5 border-b-2 border-b-mm-orange" ></div>
                        <div className="text-sm text-mm-dark-blue text-center leading-6 mb-5" >
                            Instead of immediately paying capital gains on the sale of a property (the “down leg”), many investors prefer to defer that payment by purchasing a new property (the “up leg”) with the proceeds. This is commonly referred to as a 1031 exchange, in reference to the section of U.S. tax code that defines it. There are specific rules and timelines related to a 1031 exchange, and it is important to have an experienced and knowledgeable specialist handling the process.
                        </div>
                        <ButtonPrimary text="Calculate Your Investment" link="#" ></ButtonPrimary>
                    </div>
                </CenterContainer>   
            </ImageBackgroundContainer>     
            <GlobalFooter 
                title={"View Your Insights"} 
                subTitle={"Cutting-edge Research and Innovative Insights"}
                content={"With research reports and videos covering over a dozen property types across the United States and Canada, MyMMI will help you make better, more informed decisions. Visit your personalized MyMMI dashboard to access your curated selections."} ></GlobalFooter>
        </div>
    )
}
/*


            <div className='w-full h-10 bg-black' ></div>

            <GlobalHeader />
            <GradientBackdrop backgrounGradientStyle="linear-gradient(to bottom, rgba(0, 40, 85, 0.75) 0%, rgba(0, 40, 85, 0.7) 80%, rgba(0, 40, 85, 0.5) 100%)" backgroundImage={img}>
                <IntroWidget header={'Global Reach, Local Expertise'} subHeader={'Welcome to Marcus & Millichap, the #1 commercial real estate investment sales brokerage and capital markets advisory in North America.'} />
            </GradientBackdrop>
            <RegionalWidget />
            <RegionalImpact />
            <Gallery galleryCardInfo={properties} />
*/