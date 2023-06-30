"use client";

import { useState } from 'react';
import GalleryCard from '../GalleryCard/GalleryCard';
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
                {galleryCardInfo?.map((c, i) => { return (
                    <SwiperSlide>
                        <div className={styles.cardContainer}>
                            <GalleryCard {...c}/>                      
                        </div>                     
                    </SwiperSlide>
                );})}
                {galleryCardInfo?.map((c, i) => { return (
                    <SwiperSlide>
                        <div className={styles.cardContainer}>
                            <GalleryCard {...c}/>                      
                        </div>                     
                    </SwiperSlide>
                );})}
            </Swiper>
            <div className="w-full flex">
                <FontAwesomeIcon className="pr-4 cursor-pointer ml-auto" onClick={() => slideBack()} size="xl" icon={faArrowLeftLong} />
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