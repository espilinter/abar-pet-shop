import React, { useCallback, useEffect, useRef, useState } from 'react';
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
import { useMediaQuery } from "@uidotdev/usehooks";
import arrowCircle from "../../assets/image/arrow-circle-right.png"
import Image from 'next/image';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';

export default function SwiperCoverflow(props) {
    const [swiperGap, setSwiperGap] = useState(50)
    const [swiperEffect, setSwiperEffect] = useState("coverflow")

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    useEffect(() => {
        const screen = window.matchMedia("(max-width: 760px)");
        if (screen.matches) {
            setSwiperGap(16)
            setSwiperEffect('Fade')
        }
    }, [])

    return (
        <>
            <div className='flex items-center gap-x-30 commentSwiper'>
                <button className="hidden md:inline-block h-50 w-100" onClick={handlePrev}><Image alt="" src={arrowCircle} /></button>
                <Swiper
                    ref={sliderRef}
                    effect={swiperEffect}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    spaceBetween={swiperGap}
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
                    loop={true}
                    loopedSlides={3}
                    loopAdditionalSlides={3}
                    modules={[EffectCoverflow, Navigation]}
                    className="mySwiper h-315 "
                    navigation={true}
                >
                    {props.data && props.data.map((item) => (
                        <SwiperSlide className='pt-7 '>
                            <CommentCard item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper >
                <button className="hidden md:inline-block h-50 w-100" onClick={handleNext} ><Image alt="" src={arrowCircle} className="rotate-180" /></button>
            </div>
        </>
    );
}
