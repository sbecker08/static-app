import { useState, useEffect } from 'react'
import styles from './Home.module.css';
import GlobalHeader from '../src/GlobalHeader/GlobalHeader';
import IntroWidget from '../src/IntroWidget/IntroWidget';
import RegionalWidget from '../src/RegionalWidget/RegionalWidget';
import RegionalImpact from '../src/RegionalImpact/RegionalImpact';
import Gallery from '../src/Gallery/Gallery';

function Home({ bannerText, galleryCardInfo }) {

    const [data, setData] = useState({ val: 0 });

    //Can do client side stuff
    useEffect(() => {
        setData({ val: Math.random()})
        }, []);

    return (
      <div className={styles.homePageWrapper}>        
        <GlobalHeader />
        <IntroWidget bannerText={bannerText} />
        <RegionalWidget />
        <RegionalImpact />
        <Gallery galleryCardInfo={galleryCardInfo} />
        {data.val}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
    

  }

  export async function getStaticProps() {
    const res = await fetch('http://localhost:1337/api/properties', { headers: { 'Authorization': 'Bearer 86d4fa545fb168b6b3077eac895f825968eaef438ef8dc0ae8cd1e5df7a56be8cca5e38b927de2a0d04004bb3694f353ebff07208c508f78becb4091816bec71d50e88a6d53eb916bef0751c3a7cd41249578ef3f626e3a8f12057c1c28a31dbdf4441309ed480b025d712452552798ed447d5f849c1a7d02f613ed029125353' } });
    const properties = (await res.json()).data.map(d => d.attributes);

    //Can get data from CMS and compile at build time
    return {
      props: {
        bannerText: 'Global Reach, Local Expertise FROM',
        galleryCardInfo: properties
      },
      revalidate: 3600, // In seconds
    }
  }

  export default Home;