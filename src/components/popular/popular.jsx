import React from 'react';

import {Swiper, SwiperSlide} from "swiper/react"
import PopularProductCard from "../popularProductCard/popularProductCard";

import 'swiper/swiper.scss';
import "swiper/swiper-bundle.css"
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/navigation/navigation.scss';

import style from "./popular.module.scss"
import SwiperCore, {Autoplay, EffectCoverflow, Navigation, Scrollbar, Mousewheel} from "swiper";

SwiperCore.use([Navigation, Scrollbar, Autoplay, EffectCoverflow, Mousewheel]);

const Popular = () => {
    const test = [0, 14, 14, 14, 12, 12, 12, 12,]

    return (
        <div className={style.container}>
            <Swiper sspaceBetween={100}
                    mousewheel
                    slidesPerView={5}
                    autoplay={true}
                    pagination={{clickable: true}}
                    scrollbar={{draggable: true}}>
                {test.map(() =>
                    <SwiperSlide>
                        <PopularProductCard/>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
};

export default Popular;
