import GlobalHeader from '../src/GlobalHeader/GlobalHeader';
import IntroWidget from '../src/IntroWidget/IntroWidget';
import RegionalWidget from '../src/RegionalWidget/RegionalWidget';
import RegionalImpact from '../src/RegionalImpact/RegionalImpact';
import GradientBackdrop from '../src/GradientBackdrop/GradientBackdrop'
import Gallery from '../src/Gallery/Gallery';

import img from '../public/HeroImages/HeroImage1.webp'
import CenterContainer from '../src/CenterContainer/CenterContainer';

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
                <Gallery galleryCardInfo={properties} />
            </CenterContainer>
            <div className='mb-10' ></div>
            <CenterContainer>
                <Gallery galleryCardInfo={properties} />
            </CenterContainer>
            <div className='mb-[10000px]' ></div>
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