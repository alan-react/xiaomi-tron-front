import React from 'react';
import style from "./homePage.module.css";
import Navbar from "../../components/navbar/navbar";
import Slider from "../../components/slider/slider";
import Popular from "../../components/popular/popular";
import ProductsCategory from "../../components/ProductsCategory/ProductsСategory";


const HomePage = () => {
    return (
        <div className={style.wrapper}>
            <Navbar/>
            <Slider/>
            <p className={style.line}><span>Популярные товары</span></p>
            <Popular/>
            <p className={style.line}><span>Товары по категориям</span></p>
            <ProductsCategory/>
        </div>
    );
};

export default HomePage;
