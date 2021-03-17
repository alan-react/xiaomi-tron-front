import React from 'react';
import style from "./homePage.module.css";
import Slider from "../../components/slider/slider";
import Popular from "../../components/popular/popular";
import ProductsCategory from "../../components/ProductsCategory/ProductsСategory";
import Navbar from "../../components/navbar/Navbar";
import {Dropdown} from "react-bootstrap";

const HomePage = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.sliderCategories}>
                <Navbar/>

                <Slider/>
            </div>
            <p className={style.line}><span>Популярные товары</span></p>
            <Popular/>
            <p className={style.line}><span>Товары по категориям</span></p>
            <ProductsCategory/>
        </div>
    );
};

export default HomePage;
