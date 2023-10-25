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
import articleCat from "../../assets/image/articleCat.png"
import Image from 'next/image';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';

const ArticlesSwiper = () => {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <>
            <div className='flex items-center gap-x-30 articleSwiper relative '>
                <button className="hidden md:inline-block h-50 w-100 absolute z-[2] right-5" onClick={handlePrev}><Image alt="" src={arrowCircle} /></button>
                <Swiper
                    ref={sliderRef}
                    effect={'Fade'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    spaceBetween={28}
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
                    className="mySwiper h-210 md:h-[460px] "
                    navigation={true}
                >
                    <SwiperSlide className='pt-7 justify-center flex'>
                        <div className='w-165 md:w-292 h-210 md:h-460 bg-stone-500 relative'>
                            <Image src={articleCat} className="w-full h-full" />
                            <div className='absolute bottom-0 h-65 bg-[#FFFFFF55] p-10'><p className="text-14 font-normal">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...</p></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-7 justify-center flex'>
                        <div className='w-165 md:w-292 h-210 md:h-460 bg-stone-500 relative'>
                            <Image src={articleCat} className="w-full h-full" />
                            <div className='absolute bottom-0 h-65 bg-[#FFFFFF55] p-10'><p className="text-14 font-normal">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...</p></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-7 justify-center flex'>
                        <div className='w-165 md:w-292 h-210 md:h-460 bg-stone-500 relative'>
                            <Image src={articleCat} className="w-full h-full" />
                            <div className='absolute bottom-0 h-65 bg-[#FFFFFF55] p-10'><p className="text-14 font-normal">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...</p></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-7 justify-center flex'>
                        <div className='w-165 md:w-292 h-210 md:h-460 bg-stone-500 relative'>
                            <Image src={articleCat} className="w-full h-full" />
                            <div className='absolute bottom-0 h-65 bg-[#FFFFFF55] p-10'><p className="text-14 font-normal">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...</p></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-7 justify-center flex'>
                        <div className='w-165 md:w-292 h-210 md:h-460 bg-stone-500 relative'>
                            <Image src={articleCat} className="w-full h-full" />
                            <div className='absolute bottom-0 h-65 bg-[#FFFFFF55] p-10'><p className="text-14 font-normal">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...</p></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-7 justify-center flex'>
                        <div className='w-165 md:w-292 h-210 md:h-460 bg-stone-500 relative'>
                            <Image src={articleCat} className="w-full h-full" />
                            <div className='absolute bottom-0 h-65 bg-[#FFFFFF55] p-10'><p className="text-14 font-normal">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...</p></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-7 justify-center flex'>
                        <div className='w-165 md:w-292 h-210 md:h-460 bg-stone-500 relative'>
                            <Image src={articleCat} className="w-full h-full" />
                            <div className='absolute bottom-0 h-65 bg-[#FFFFFF55] p-10'><p className="text-14 font-normal">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...</p></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pt-7 justify-center flex'>
                        <div className='w-165 md:w-292 h-210 md:h-460 bg-stone-500 relative'>
                            <Image src={articleCat} className="w-full h-full" />
                            <div className='absolute bottom-0 h-65 bg-[#FFFFFF55] p-10'><p className="text-14 font-normal">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...</p></div>
                        </div>
                    </SwiperSlide>
                </Swiper >
                <button className="hidden md:inline-block h-50 w-100 absolute z-[2] left-5" onClick={handleNext} ><Image alt="" src={arrowCircle} className="rotate-180" /></button>
            </div>
        </>
    );
}

export default ArticlesSwiper;