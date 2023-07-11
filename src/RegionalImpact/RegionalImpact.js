import styles  from './RegionalImpact.module.css'
import RegionalMap from "./RegionalMap/RegionalMap";
import UserCardQuote from "../UserCardQuote/UserCardQuote"
import CenterContainer from '../modules/LayoutContainers/CenterContainer/CenterContainer';

function RegionalImpact() {
    return (
        <div className={styles.regionalImpactContainer}>   
            
            <div className={styles.regionalMap}>
                <RegionalMap />
            </div>     
                <div className={styles.regionalImpactInnerContainer}>
                    
            <CenterContainer>  
                    <div className={styles.ourImpactContainer}>
                        <h2 className={styles.impactHeader}>Our Impact</h2>
                        <h1 className={styles.impactSubHeader}>A Legacy of Success, Built for the Future</h1>
                        <div className={styles.impactDescription}>For more than 50 years, Marcus & Millichap has worked tirelessly to help our clients create and preserve wealth through commercial real estate investment sales as well as debt and equity advisory. Since our founding in 1971, we have grown to more than 80 offices throughout the United States and Canada, including two offices here in the Pacific Northwest. We also assembled the industry’s largest and most qualified team of specialists to help provide real estate solutions that match your unique investment needs. Connect with an advisor today.</div>
                        <UserCardQuote />
                    </div>
                    
            </CenterContainer> 
                </div> 
        </div>
    );
  }
  
export default RegionalImpact;
  