"use client"

import styles  from './GlobalHeader.module.css'
import Image from 'next/image'

import { useState, useContext } from 'react';
import { MmAuthenticationContext } from '../../modules/MmAuthentication/MmAuthenticationZone';

function GlobalHeader() {
  
    const [navbarOpen, setNavbarOpen] = useState(false);
    const authenticationContext = useContext(MmAuthenticationContext);

    console.log(authenticationContext.user);

    return (
<>
      <nav className="relative flex flex-wrap items-center justify-between px-7 py-4 bg-mm-blue">
        <div className="container flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a >
              <Image src="https://www.marcusmillichap.com/Areas/MM/img/MM_logo2018_white.svg" alt="dallesInn" width={185} height={70} />
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Share</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Tweet</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Pin</span>
                </a>
              </li>
            </ul>
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