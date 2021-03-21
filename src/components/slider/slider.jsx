import React from 'react';
import {Carousel} from "react-bootstrap";
import img from "../../assets/PCshoujiao1.jpg"

import style from "./slider.module.css"
import {connect} from "react-redux";

const Slider = ({images}) => {



    return (
        <Carousel pause="hover" className={style.slider}>
            {images.images.map((slide, index) =>
            <Carousel.Item key={index} className={style.sliderImg}>
                <img src={slide.image} alt="slider png" width={1000} height={500}
                     className="d-block w-100"
                     alt="first slide"/>
                <Carousel.Caption className={style.caption}>
                </Carousel.Caption>
            </Carousel.Item>
            )}
        </Carousel>
    );

}

const mapStateToProps = (state) => ({
    images: state.main.sliderImages
})

export default connect(mapStateToProps, {})(Slider)
