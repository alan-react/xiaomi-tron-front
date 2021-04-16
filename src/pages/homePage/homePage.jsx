import React from 'react';
import style from "./homePage.module.css";
import HomeSlider from "../../components/slider/slider";
import Popular from "../../components/popular/popular";
import NewProducts from "../../components/newProducts/newProducts";
import Reviews from "../../components/reviews/reviews";
import News from "../news/news";

const HomePage = () => {
    return (
        <div className={style.wrapper}>
            <HomeSlider/>
            <div className={style.popularNewProducts}>
                <Popular/>
                <NewProducts/>
            </div>
            <div className={style.reviewsNews}>
                <div style={{maxWidth: 1400}}>
                    <Reviews/>
                    <News/>
                </div>
            </div>
        </div>
    );
};

// <div className={style.sliderCategories}>
//     <Slider/>
// </div>
// <p className={style.line}><span>Популярные товары</span></p>
// <Popular/>
// <p className={style.line}><span>Товары по категориям</span></p>
// <ProductsCategory/>

export default HomePage;
