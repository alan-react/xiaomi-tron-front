import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import {connect} from "react-redux";
import style from "./slider.module.css"

const HomeSlider = ({images}) => {
    return (
        <Slider autoplay={3000}>
            {images.images.map((item, index) => (
                <div
                    key={index}
                    className={style.bg}
                    style={{background: `url('${item.image}') no-repeat center center`}}>
                    <div className={style.center}>
                        <h1>{item.title}</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur. Lorem ipsum.</p>
                        <button className={style.btn}>Смотреть</button>
                    </div>
                </div>
            ))}
        </Slider>
    );

}

const mapStateToProps = (state) => ({
    images: state.main.sliderImages
})

export default connect(mapStateToProps, {})(HomeSlider)

// <Carousel pause="hover" className={style.slider}>
//     {images.images.map((slide, index) =>
//             <Carousel.Item key={index} className={style.sliderImg}>
//                 <img src={slide.image} alt="slider png" width={1400} height={700}
//                      className="d-block w-100"
//                      alt="first slide"/>
//                 <Carousel.Caption className={style.caption}>
//                 </Carousel.Caption>
//             </Carousel.Item>
//         )}
// </Carousel>
