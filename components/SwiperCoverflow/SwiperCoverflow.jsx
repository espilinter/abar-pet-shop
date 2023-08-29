import React, { useCallback, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from '../../styles/components/SwiperCoverflow.module.css';

// import required modules
import { EffectCoverflow } from 'swiper/modules';
import CommentCard from '../CommentCard/CommentCard';
import { Navigation } from 'swiper/modules';

import arrowCircle from "../../assets/image/arrow-circle-right.png"
import Image from 'next/image';

export default function SwiperCoverflow() {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    let a = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <>
            <div className='flex items-center gap-x-30'>
                <button className=" h-50 w-100" onClick={handlePrev}><Image alt="" src={arrowCircle} /></button>
                <Swiper
                    ref={sliderRef}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    spaceBetween={50}
                    // breakpoints={{
                    //     1440: {
                    //         spaceBetween: 40
                    //     },
                    // }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                        scale: 0.85,
                    }}

                    modules={[EffectCoverflow, Navigation]}
                    className="mySwiper h-315 "
                    navigation={true}
                >
                    {a.map((item) => (
                        <SwiperSlide className='pt-7'>
                            <CommentCard />
                        </SwiperSlide>
                    ))}
                </Swiper >
                <button className=" h-50 w-100" onClick={handleNext} ><Image alt="" src={arrowCircle} className="rotate-180" /></button>
            </div>
        </>
    );
}