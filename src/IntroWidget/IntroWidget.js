import styles  from './IntroWidget.module.css'
import SingleStatComponent from '../SingleStatComponent/SingleStatComponent'
import CenterContainer from '../CenterContainer/CenterContainer';

function GlobalHeader({ header, subHeader, children }) {
    /*
            <div className={styles.vimeoOuterWrapper}>
                <div className={styles.vimeoInnerWrapper}>
                <iframe className={styles.vimeoVideo} id="vim-cf15651f-5ddb-4465-9cc3-50565fa3b299" data-video-id="427061317" class="embed-responsive-item" type="text/html" title="Vimeo Video" src="//player.vimeo.com/video/427061317?badge=0&amp;background=1" data-ready="true"></iframe>
                </div>
            </div>
    */
    return (
        <>
        <div className="text-white">
            <CenterContainer>
                <div className="flex pt-5">
                    <p className="ml-auto">Location: Pacific Northwest | Change Location</p>
                </div>
                <div className="mt-40">
                    <h1 className="text-6xl m-0">{header}</h1>
                    <h2 className="my-5 mb-10 text-xl">{subHeader}</h2>
                </div>
                <div>
                    <a className="border-solid border border-slate-400 bg-mm-dark-blue text-white p-4 px-5 uppercase inline-block mr-2 mb-2 roboto text-sm font-semibold tracking-wider">Find A Property</a>
                    <a className="border-gray-800 bg-slate-100 text-mm-blue p-4 px-5 uppercase inline-block mr-2 mb-2 roboto text-sm font-semibold tracking-wider">Gain Insights</a>
                    <a className="border-gray-800 bg-slate-100 text-mm-blue p-4 px-5 uppercase inline-block mr-2 mb-2 roboto text-sm font-semibold tracking-wider">Connect With An Advisor</a>
                </div>                
                <div className={styles.searchContainer}>
                    <input  className={styles.mmInput} type="text" aria-label="Search" ></input>
                </div>
            </CenterContainer>
            <div className={styles.statsOuterContainer}>
                <CenterContainer>
                    <div className="flex py-6">
                        <SingleStatComponent header="Header" subHeader="Sub Header" secondaryText="Secondary Text" ></SingleStatComponent>
                        <SingleStatComponent header="Header" subHeader="Sub Header" secondaryText="Secondary Text" ></SingleStatComponent>
                        <SingleStatComponent header="Header" subHeader="Sub Header" secondaryText="Secondary Text" ></SingleStatComponent>
                    </div>
                </CenterContainer>
            </div>
        </div>
        </>
    );
  }
  
export default GlobalHeader;
  

/*

        <div className={styles.introContainer}>
            <div className="max-w-screen-xl w-full px-5 mx-auto z-10 text-white">
                <div className="flex">
                    <p className="ml-auto">Location: Pacific Northwest | Change Location</p>
                </div>
                <div className="mt-40">
                    <h1 className="text-6xl m-0">{header}</h1>
                    <h2 className="my-5 mb-10 text-xl">{subHeader}</h2>
                </div>
                <div>
                    <a className="border-solid border border-slate-400 bg-mm-dark-blue text-white p-4 px-5 uppercase inline-block mr-2 mb-2 roboto text-sm font-semibold tracking-wider">Find A Property</a>
                    <a className="border-gray-800 bg-slate-100 text-mm-blue p-4 px-5 uppercase inline-block mr-2 mb-2 roboto text-sm font-semibold tracking-wider">Gain Insights</a>
                    <a className="border-gray-800 bg-slate-100 text-mm-blue p-4 px-5 uppercase inline-block mr-2 mb-2 roboto text-sm font-semibold tracking-wider">Connect With An Advisor</a>
                </div>                
                <div className={styles.searchContainer}>
                    <input  className={styles.mmInput} type="text" aria-label="Search" ></input>
                </div>
            </div>
            <div className={styles.statsOuterContainer}>
                <div className={styles.statsInnerContainer}>
                    <SingleStatComponent header="Header" subHeader="Sub Header" secondaryText="Secondary Text" ></SingleStatComponent>
                    <SingleStatComponent header="Header" subHeader="Sub Header" secondaryText="Secondary Text" ></SingleStatComponent>
                    <SingleStatComponent header="Header" subHeader="Sub Header" secondaryText="Secondary Text" ></SingleStatComponent>
                </div>
            </div>
        </div>

*/