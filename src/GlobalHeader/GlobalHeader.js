"use client"

import styles  from './GlobalHeader.module.css'
import Image from 'next/image'

import { useState, useContext } from 'react';
import { MmAuthenticationContext } from '../../modules/MmAuthentication/MmAuthenticationZone';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function GlobalHeader() {
  
    const [navbarOpen, setNavbarOpen] = useState(false);
    const authenticationContext = useContext(MmAuthenticationContext);

    console.log(authenticationContext.user);

    const links = [ 'Properties', 'Financing', 'Research', 'Advisors', 'Services' ]
    const secondaryLinks = [ 'About', 'News & Events', 'Contact'  ]

    return (
<>
      <nav className="text-white relative flex flex-wrap items-center justify-between px-7 py-4 bg-mm-blue max-xl:py-6">
        <div className="w-full flex flex-wrap items-center">
          <div className="max-xl:mx-auto flex justify-items-center">
            <Image src="https://www.marcusmillichap.com/Areas/MM/img/MM_logo2018_white.svg" alt="dallesInn" width={185} height={70} />
            <ul className="max-xl:absolute max-xl:hidden ml-5 flex font-bold font-siz roboto pt-2 uppercase text-sm">
              {
                links.map(l => (
                  <li className="mx-2 tracking-wider" >{l}</li>
                ))
              }
            </ul>
          </div>
          <div className="max-xl:hidden flex justify-items-center">
            <ul className="max-xl:absolute max-xl:hidden flex font-bold font-siz roboto pt-2 text-sm">
              {
                secondaryLinks.map(l => (
                  <li className="mx-2 tracking-wider" >{l}</li>
                ))
              }
            </ul>
          </div>          
          <div className="ml-auto max-xl:absolute max-xl:left-5">
            {
              authenticationContext?.user ?
              <div className={styles.loggedInIcon}>{authenticationContext.user.firstName[0] + authenticationContext.user.lastName[0]}</div> :
              <span>Sign In/Up</span>
            }
          </div>
          <div className="max-xl:absolute max-xl:right-5 max-xl:block hidden">
            <FontAwesomeIcon size="xl" icon={faBars} />
          </div>
        </div>
      </nav>
    </>
    );
  }
  
export default GlobalHeader;
  






      /*<div>
        <div className={styles.bannerContainer}>
          <div className={styles.logoContainer}>
            <Image src="https://www.marcusmillichap.com/Areas/MM/img/MM_logo2018_white.svg" alt="dallesInn" width={185} height={70} />
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
      </div>*/