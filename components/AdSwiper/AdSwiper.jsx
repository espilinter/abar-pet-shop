import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import ad2 from "../../assets/image/ad2.png"
import Image from 'next/image';
const AdSwiper = (props) => {
    return (
        <>
            <div className={`AdSwiper ${props.className}`}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {props.data && props.data.map((item) => (
                        <SwiperSlide key={item.id}><img src={item} className='rounded-2xl' /></SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </>
    );
}

export default AdSwiper;