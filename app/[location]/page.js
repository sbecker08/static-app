import GlobalHeader from '../../src/GlobalHeader/GlobalHeader';
import IntroWidget from '../../src/IntroWidget/IntroWidget';
import RegionalWidget from '../../src/RegionalWidget/RegionalWidget';
import RegionalImpact from '../../src/RegionalImpact/RegionalImpact';
import Gallery from '../../src/Gallery/Gallery';


export default function Page({ params }) {

    var jsonResponse = JSON.parse('{"data":[{"id":1,"attributes":{"imageUrl":"https://mmimageservice.azurewebsites.net/api/image/property/514364f0-9507-4e47-a236-9890c30389eb/M","propertyType":"Office","propertyName":"Turn Key Dental Office","location":"Portland, OR","unitDetails":"Price/Gross SF: $532.18","capRate":"Cap Rate: 6.04%","price":"Listing Price: $1,075,000","createdAt":"2023-04-28T04:08:23.358Z","updatedAt":"2023-04-28T04:14:12.372Z","publishedAt":"2023-04-28T04:14:12.369Z"}},{"id":2,"attributes":{"imageUrl":"https://mmimageservice.azurewebsites.net/api/image/property/62a481f0-b126-4b6b-ad2b-acd23959b601/M","propertyType":"Net Lease","propertyName":"Popeyes","location":"Kennewick, WA","unitDetails":"Years Remaining On Lease: 18.4","capRate":"Cap Rate: 5.15%","price":"Listing Price: $3,883,495","createdAt":"2023-04-28T04:10:54.384Z","updatedAt":"2023-04-28T04:14:17.105Z","publishedAt":"2023-04-28T04:14:17.102Z"}},{"id":3,"attributes":{"imageUrl":"https://mmimageservice.azurewebsites.net/api/image/property/dc62fffa-67b7-450d-9681-4ea6597206f0/M","propertyType":"Office","propertyName":"Tub & Tan Building","location":"Portland, OR","unitDetails":"Price/Gross SF: $230.00","capRate":"Cap Rate: 7.78%","price":"Listing Price: $1,150,00","createdAt":"2023-04-28T04:12:03.695Z","updatedAt":"2023-04-28T04:14:25.378Z","publishedAt":"2023-04-28T04:14:25.376Z"}},{"id":4,"attributes":{"imageUrl":"https://mmimageservice.azurewebsites.net/api/image/property/38e2185c-db17-4385-9d27-1370e99a0559/M","propertyType":"Apartments","propertyName":"Cedarbrook Apartments","location":"Portland, OR","unitDetails":"Number of Units: 17","capRate":"Cap Rate: 5.55%","price":"Listing Price: $2,750,000","createdAt":"2023-04-28T04:12:59.553Z","updatedAt":"2023-04-28T18:57:59.442Z","publishedAt":"2023-04-28T18:57:59.440Z"}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":4}}}');
    const properties = jsonResponse.data.map(d => d.attributes);

    return (
        <>
            <GlobalHeader />
            <IntroWidget bannerText={`Welcome to the ${bannerLookup[params.location]}`} />
            <RegionalWidget />
            <RegionalImpact />
            <Gallery galleryCardInfo={properties} />
        </>
    )
}

export const dynamicParams = false;

export async function generateStaticParams() {   
    return [
        { location: '' },
        { location: 'southwest' },
        { location: 'pacific-northwest' }
    ]
  }

const bannerLookup = {
    '': "Marcus & Millichap",
    'southwest': "Southwest",
    'pacific-northwest': 'Pacific Northwest'
}

/*
export async function getStaticPaths() {
    return { 
        paths: [
            { location: 'southwest' }
        ],
        fallback: false
    }
  }
   

export async function getStaticProps() {

    var jsonResponse = JSON.parse('{"data":[{"id":1,"attributes":{"imageUrl":"https://mmimageservice.azurewebsites.net/api/image/property/514364f0-9507-4e47-a236-9890c30389eb/M","propertyType":"Office","propertyName":"Turn Key Dental Office","location":"Portland, OR","unitDetails":"Price/Gross SF: $532.18","capRate":"Cap Rate: 6.04%","price":"Listing Price: $1,075,000","createdAt":"2023-04-28T04:08:23.358Z","updatedAt":"2023-04-28T04:14:12.372Z","publishedAt":"2023-04-28T04:14:12.369Z"}},{"id":2,"attributes":{"imageUrl":"https://mmimageservice.azurewebsites.net/api/image/property/62a481f0-b126-4b6b-ad2b-acd23959b601/M","propertyType":"Net Lease","propertyName":"Popeyes","location":"Kennewick, WA","unitDetails":"Years Remaining On Lease: 18.4","capRate":"Cap Rate: 5.15%","price":"Listing Price: $3,883,495","createdAt":"2023-04-28T04:10:54.384Z","updatedAt":"2023-04-28T04:14:17.105Z","publishedAt":"2023-04-28T04:14:17.102Z"}},{"id":3,"attributes":{"imageUrl":"https://mmimageservice.azurewebsites.net/api/image/property/dc62fffa-67b7-450d-9681-4ea6597206f0/M","propertyType":"Office","propertyName":"Tub & Tan Building","location":"Portland, OR","unitDetails":"Price/Gross SF: $230.00","capRate":"Cap Rate: 7.78%","price":"Listing Price: $1,150,00","createdAt":"2023-04-28T04:12:03.695Z","updatedAt":"2023-04-28T04:14:25.378Z","publishedAt":"2023-04-28T04:14:25.376Z"}},{"id":4,"attributes":{"imageUrl":"https://mmimageservice.azurewebsites.net/api/image/property/38e2185c-db17-4385-9d27-1370e99a0559/M","propertyType":"Apartments","propertyName":"Cedarbrook Apartments","location":"Portland, OR","unitDetails":"Number of Units: 17","capRate":"Cap Rate: 5.55%","price":"Listing Price: $2,750,000","createdAt":"2023-04-28T04:12:59.553Z","updatedAt":"2023-04-28T18:57:59.442Z","publishedAt":"2023-04-28T18:57:59.440Z"}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":4}}}');
    console.log(jsonResponse);
    //const res = await fetch('http://localhost:1337/api/properties', { headers: { 'Authorization': 'Bearer 86d4fa545fb168b6b3077eac895f825968eaef438ef8dc0ae8cd1e5df7a56be8cca5e38b927de2a0d04004bb3694f353ebff07208c508f78becb4091816bec71d50e88a6d53eb916bef0751c3a7cd41249578ef3f626e3a8f12057c1c28a31dbdf4441309ed480b025d712452552798ed447d5f849c1a7d02f613ed029125353' } });
    //const jsonResponse = (await res.json());

    const properties = jsonResponse.data.map(d => d.attributes);
    console.log(properties)

    //Can get data from CMS and compile at build time
    return {
      props: {
        bannerText: 'Global Reach, Local Expertise FROM',
        galleryCardInfo: properties
      },
      revalidate: 3600, // In seconds
    }
  }
*/