"use client";

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

function Gallery({ children }) {
    
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
                {children.map((c, i) => (
                    <SwiperSlide key={i}>
                        {c}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="w-full flex py-5 justify-end max-lg:justify-center text-mm-blue">
                <FontAwesomeIcon className="pr-10 cursor-pointer" onClick={() => slideBack()} size="xl" icon={faArrowLeftLong} />
                <FontAwesomeIcon className="cursor-pointer" onClick={() => slideForward()} size="xl" icon={faArrowRightLong} />
            </div>
        </div>
    );
  }
  
export default Gallery;