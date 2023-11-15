import React, { useCallback, useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import ad2 from "../../assets/image/ad2.png"
import Image from 'next/image';
import arrowCircle from "../../assets/image/arrow-circle-right.png"

const AdSwiper = (props) => {

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
        console.log(props);
    }, [])

    return (

        <div className={`AdSwiper ${props.className} relative rounded-xl`}>
            <button className="hidden md:inline-block h-40 w-40 absolute top-[calc(50%-20px)] right-16 z-[2]" onClick={handlePrev}>
                <Image alt="" src={arrowCircle} />
            </button>
            <Swiper
                ref={sliderRef}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {props.data && props.data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item.url} className='rounded-2xl' />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="hidden md:inline-block h-40 w-40 absolute top-[calc(50%-20px)] left-16 z-[1]" onClick={handleNext} >
                <Image alt="" src={arrowCircle} className="rotate-180" />
            </button>
        </div>

    );
}

export default AdSwiper;