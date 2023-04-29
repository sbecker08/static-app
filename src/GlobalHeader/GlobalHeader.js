import styles  from './GlobalHeader.module.css'
import Image from 'next/image'

function GlobalHeader() {
    return (
      <div>
        <div className={styles.bannerContainer}>
          <div className={styles.logoContainer}>
            <Image src="/MM_logo2018_white.svg" alt="dallesInn" width={185} height={70} />
          </div>
          <ul className={styles.menuContainer}>
            <li className={styles.menuItem + ' ' + styles.uppercaseMenuItem} >
              <a href="#" >Properties</a>
            </li>
            <li className={styles.menuItem + ' ' + styles.uppercaseMenuItem} >
              <a href="#" >Financing</a>
            </li>
            <li className={styles.menuItem + ' ' + styles.uppercaseMenuItem} >
              <a href="#" >Research</a>
            </li>
            <li className={styles.menuItem + ' ' + styles.uppercaseMenuItem} >
              <a href="#" >Advisors</a>
            </li>
            <li className={styles.menuItem + ' ' + styles.uppercaseMenuItem} >
              <a href="#" >Services</a>
            </li>
          </ul>
          <ul className={styles.menuContainer}>
            <li className={styles.menuItem}>
              <a href="#" >About</a>
            </li>
            <li className={styles.menuItem}>
              <a href="#" >News & Events</a>
            </li>
            <li className={styles.menuItem}>
              <a href="#" >Contact</a>
            </li>
          </ul>
        </div>        
        <div className={styles.headerSeparator}></div>
      </div>
    );
  }
  
export default GlobalHeader;
  