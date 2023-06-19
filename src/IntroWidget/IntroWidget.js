import styles  from './IntroWidget.module.css'

function GlobalHeader({ header, subHeader, children }) {
    /*
            <div className={styles.vimeoOuterWrapper}>
                <div className={styles.vimeoInnerWrapper}>
                <iframe className={styles.vimeoVideo} id="vim-cf15651f-5ddb-4465-9cc3-50565fa3b299" data-video-id="427061317" class="embed-responsive-item" type="text/html" title="Vimeo Video" src="//player.vimeo.com/video/427061317?badge=0&amp;background=1" data-ready="true"></iframe>
                </div>
            </div>
    */
    return (
        <div className={styles.widgetBackdrop}>

            <div className={styles.introContentContainer}>
                <div className={styles.locationSection}>
                    <p className={styles.locationText}>Location: Pacific Northwest | Change Location</p>
                </div>
                <div className={styles.bannerContainer}>
                    <h1 className={styles.mainBannerText}>{header}</h1>
                    <h2 className={styles.subBannerText}>{subHeader}</h2>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.mmButton}>Find A Property</button>
                    <button className={styles.mmButton}>Gain Insights</button>
                    <button className={styles.mmButton}>Connect With An Advisor</button>
                </div>                
                <div className={styles.searchContainer}>
                    <input  className={styles.mmInput} type="text" aria-label="Search" ></input>
                </div>
            </div>
            <div className={styles.statsOuterContainer}>
                <div className={styles.statsInnerContainer}>
                    { children }
                </div>
            </div>
        </div>
    );
  }
  
export default GlobalHeader;
  