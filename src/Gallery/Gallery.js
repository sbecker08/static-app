"use client";

import { useState } from 'react';
import GalleryCard from '../GalleryCard/GalleryCard';
import GalleryHeaderCard from '../GalleryHeaderCard/GalleryHeaderCard';
import styles  from './Gallery.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

function Gallery({ galleryCardInfo }) {
    
    const [swiperRef, setSwiperRef] = useState(null);

    const slideBack = () => {
        const slideTo = swiperRef ? swiperRef?.activeIndex - 1 : 0;
        swiperRef?.slideTo(slideTo);
    }

    const slideForward = () => {
        const slideTo = swiperRef?.progress != 1 ? swiperRef?.activeIndex + 1 : swiperRef?.activeIndex;
        swiperRef?.slideTo(slideTo);
    }

    return (
        <div>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={"auto"}
                grabCursor={true}    
                pagination={true}
            >
                <SwiperSlide>
                    <div key="00" className={styles.cardContainer}>
                        <GalleryHeaderCard 
                            superHeader="Current Pacific Northwest Listings"
                            header="Your Property Search Start Here"
                            bodyText="Finding the right investment opportunity is easy when choosing from the industry’s largest, most diverse collection of exclusive commercial real estate listings. Start your search now."
                            buttonOneText="View Available PNW Listings"
                            buttonTwoText="View Available U.S. & Canada Listings"
                            ></GalleryHeaderCard>
                    </div>
                </SwiperSlide>
                {galleryCardInfo?.map((c, i) => { return (
                    <SwiperSlide>
                        <div key={i} className={styles.cardContainer}>
                            <GalleryCard {...c}/>                      
                        </div>                     
                    </SwiperSlide>
                );})}
                {galleryCardInfo?.map((c, i) => { return (
                    <SwiperSlide>
                        <div key={i + 6} className={styles.cardContainer}>
                            <GalleryCard {...c}/>                      
                        </div>                     
                    </SwiperSlide>
                );})}
            </Swiper>
            <div className="w-full flex py-5 justify-end max-lg:justify-center text-mm-blue">
                <FontAwesomeIcon className="pr-10 cursor-pointer" onClick={() => slideBack()} size="xl" icon={faArrowLeftLong} />
                <FontAwesomeIcon className="cursor-pointer" onClick={() => slideForward()} size="xl" icon={faArrowRightLong} />
            </div>
        </div>
    );
  }

  
export default Gallery;


/*

        <div className="relative">
            <div className={styles.gallery}>  
                <div className={styles.galleryTrack}>
                    {galleryCardInfo?.map((c) => { return (
                        <div className={styles.cardContainer}>
                            <GalleryCard {...c}/>                      
                        </div>
                    );})}
                                        {galleryCardInfo?.map((c) => { return (
                        <div className={styles.cardContainer}>
                            <GalleryCard {...c}/>                      
                        </div>
                    );})}
                    <div className="mr-16" ></div>
                </div>
            </div>
        </div>

*/