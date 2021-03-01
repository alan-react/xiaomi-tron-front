import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import img1 from "../../assets/Xiaomi-Mi-TV.jpg"
import img2 from "../../assets/15416434086f3194e9b4cfd895408b4662ddfb6d.jpg"
import img3 from "../../assets/xiaomi-4a-08.jpg"

import style from "./slider.module.css"

const Slider = () => {
        return (
            <Carousel className={style.slider} >
                <Carousel.Item className={style.sliderImg}>
                    <img src={img1}
                         className="d-block w-100"
                         alt="first slide"/>
                    <Carousel.Caption>
                        Xiaomi Mi TV Ultra уже есть в китае!
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={style.sliderImg}>
                    <img src={img2}
                         className="d-block w-100"
                         alt="first slide"/>
                    <Carousel.Caption>
                        Di Mass
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={style.sliderImg}>
                    <img src={img3}
                         className="d-block w-100"
                         alt="first slide"/>
                    <Carousel.Caption>
                        Di Mass
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );

}

export default Slider;
