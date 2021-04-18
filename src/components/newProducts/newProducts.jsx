import React from 'react';
import style from "./newProducts.module.css";
import PopularProductCard from "../popularProductCard/popularProductCard";
import ProductCard from "../сards/card";
import img from "../../assets/xiaomi-redmi-note-9-pro.jpeg"
import {Link} from "react-router-dom";

const NewProducts = () => {
    const test = [0, 14, 14, 14, 1, 1]
    return (
        <div className={style.wrapper}>
            <p className={style.title}>Новинки</p>
            <div className={style.cards}>
                {test.map(() =>
                    <>
                        <ProductCard slug="slug" title={"Redmi note 5"}
                                     img={img} price="80000"
                                     available={true}/>

                        <ProductCard slug="slug" title={"Redmi note 5"}
                                     img={img} price="80000"
                                     available={true}/>
                    </>)}
            </div>
        </div>
    );
};

export default NewProducts;
