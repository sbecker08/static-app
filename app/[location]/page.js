import GlobalHeader from '../../src/GlobalHeader/GlobalHeader';
import IntroWidget from '../../src/IntroWidget/IntroWidget';
import RegionalWidget from '../../src/RegionalWidget/RegionalWidget';
import RegionalImpact from '../../src/RegionalImpact/RegionalImpact';
import Gallery from '../../src/Gallery/Gallery';
import { createClient } from 'contentful'
import SingleStatComponent from '../../src/SingleStatComponent/SingleStatComponent';
import DoubleStatComponent from '../../src/DoubleStatComponent/DoubleStatComponent';


export default async function Page({ params }) {

    var jsonResponse = JSON.parse('{"data":[{"id":1,"attributes":{"imageUrl":"https://mmimageservice.azurewebsites.net/api/image/property/514364f0-9507-4e47-a236-9890c30389eb/M","propertyType":"Office","propertyName":"Turn Key Dental Office","location":"Portland, OR","unitDetails":"Price/Gross SF: $532.18","capRate":"Cap Rate: 6.04%","price":"Listing Price: $1,075,000","createdAt":"2023-04-28T04:08:23.358Z","updatedAt":"2023-04-28T04:14:12.372Z","publishedAt":"2023-04-28T04:14:12.369Z"}},{"id":2,"attributes":{"imageUrl":"https://mmimageservice.azurewebsites.net/api/image/property/62a481f0-b126-4b6b-ad2b-acd23959b601/M","propertyType":"Net Lease","propertyName":"Popeyes","location":"Kennewick, WA","unitDetails":"Years Remaining On Lease: 18.4","capRate":"Cap Rate: 5.15%","price":"Listing Price: $3,883,495","createdAt":"2023-04-28T04:10:54.384Z","updatedAt":"2023-04-28T04:14:17.105Z","publishedAt":"2023-04-28T04:14:17.102Z"}},{"id":3,"attributes":{"imageUrl":"https://mmimageservice.azurewebsites.net/api/image/property/dc62fffa-67b7-450d-9681-4ea6597206f0/M","propertyType":"Office","propertyName":"Tub & Tan Building","location":"Portland, OR","unitDetails":"Price/Gross SF: $230.00","capRate":"Cap Rate: 7.78%","price":"Listing Price: $1,150,00","createdAt":"2023-04-28T04:12:03.695Z","updatedAt":"2023-04-28T04:14:25.378Z","publishedAt":"2023-04-28T04:14:25.376Z"}},{"id":4,"attributes":{"imageUrl":"https://mmimageservice.azurewebsites.net/api/image/property/38e2185c-db17-4385-9d27-1370e99a0559/M","propertyType":"Apartments","propertyName":"Cedarbrook Apartments","location":"Portland, OR","unitDetails":"Number of Units: 17","capRate":"Cap Rate: 5.55%","price":"Listing Price: $2,750,000","createdAt":"2023-04-28T04:12:59.553Z","updatedAt":"2023-04-28T18:57:59.442Z","publishedAt":"2023-04-28T18:57:59.440Z"}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":4}}}');
    const properties = jsonResponse.data.map(d => d.attributes);

    /*const contentfulClient = createClient(
      {
        space: '7or0qllst114',
        accessToken: '4-8dIzY4_Dy4Yx2XFwJlHNgyPl1FHMiznoA_O2_yas0',
        environment: "master"
      }
    );

    var data = await contentfulClient.getEntries({ 
        'fields.slug': params.location,
        content_type: 'homePage'
    })

    var contentItem = data.items[0]

    console.log(data.items[0].fields.heroStats[0].sys.contentType)*/

/*
    await contentfulClient.getSpace('7or0qllst114').then(async (space) => {
      await space.getEnvironment('master').then(async (environment) => {
        await environment.getEntries({ query: {
          content_type: 'Home Page'
        }}).then(async (entries) => {
          console.log(entries)
        })
      })
    })
*/

    return (
        <>
            <GlobalHeader />
            <IntroWidget header={contentItem.fields.headline} subHeader={contentItem.fields.subtitle} >
              {
                contentItem.fields.heroStats.map(s => {
                  if(s.sys.contentType.sys.id == 'singleStat')
                    return (<SingleStatComponent header={s.fields.header} subHeader={s.fields.subHeader} secondaryText={s.fields.secondaryText} />)
                    if(s.sys.contentType.sys.id == 'doubleStat')
                      return (<DoubleStatComponent header={s.fields.header} subHeader={s.fields.subHeader} secondaryHeader={s.fields.secondaryHeader} secondarySubHeader={s.fields.secondarySubHeader} />)
                })
              }
            </IntroWidget>
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