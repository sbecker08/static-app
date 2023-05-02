import styles  from './IntroWidget.module.css'

function GlobalHeader({ bannerText }) {
    return (
        <div className={styles.widgetBackdrop}>
            <div className={styles.introContentContainer}>
                <div className={styles.locationSection}>
                    <p className={styles.locationText}>Location: Pacific Northwest | Change Location</p>
                </div>
                <div className={styles.bannerContainer}>
                    <h1 className={styles.mainBannerText}>{bannerText}</h1>
                    <h2 className={styles.subBannerText}>Welcome to Marcus & Millichap, the #1 commercial real estate investment sales brokerage and capital markets advisory in North America.</h2>
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
                    <div className={styles.statsContainer}>
                        <h1 className={styles.statsHeader}>$86.3 Billion</h1>
                        <h2 className={styles.statsSubHeader}>Value of Recently Closed Transactions</h2>
                        <p className={styles.statsCaption}>Pacific Northwest: $4.2B</p>
                    </div>
                    <div className={styles.statsContainer}>
                        <h1 className={styles.statsHeader}>12,272</h1>
                        <h2 className={styles.statsSubHeader}>Closed Sales in Most Recent Year</h2>
                        <p className={styles.statsCaption}>Pacific Northwest: 465</p>
                    </div>
                    <div className={styles.statsContainer}>
                        <h1 className={styles.statsHeader}>$12.8 Billion</h1>
                        <h2 className={styles.statsSubHeader}>Total Value of Recent Listings</h2>
                        <p className={styles.statsCaption}>Pacific Northwest: $2.2B</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
export default GlobalHeader;
  