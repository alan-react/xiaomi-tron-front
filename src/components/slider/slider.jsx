import React from 'react';
import {Carousel} from "react-bootstrap";
import img from "../../assets/PCshoujiao1.jpg"

import style from "./slider.module.css"
import {connect} from "react-redux";

const Slider = () => {

    const slides = [1,2,3,4,5,6]

    return (
        <Carousel pause="hover" className={style.slider}>
            {slides.map((slide, index) =>
            <Carousel.Item key={index} className={style.sliderImg}>
                <img src={img} width={1000} height={500}
                     className="d-block w-100"
                     alt="first slide"/>
                <Carousel.Caption className={style.caption}>
                </Carousel.Caption>
            </Carousel.Item>
            )}
        </Carousel>
    );

}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {})(Slider)
