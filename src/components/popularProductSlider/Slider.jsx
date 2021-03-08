import React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';

const StickySlider = () => {
    const params = {
        slidesPerView: 3,
    };

    const data = [1,2,3,4]

    return (
        <Swiper {...params}>
            {data.map((item, idx) => (
                <div key={idx}>
                    {item}
                </div>
            ))}
        </Swiper>
    );
};

export default StickySlider;
