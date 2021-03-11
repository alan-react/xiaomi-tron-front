import React, {useState} from 'react';
import ProductCard from "../сards/card";
import style from "./ProductsCategory.module.scss"
import {connect} from "react-redux";
import {getProducts} from "../../redux/reducers/mainReducer";
import classNames from "classnames";


const ProductsCategory = ({getProducts}) => {
    const testProducts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const testCategories = ["Смартфоны Xiaomi", "Ноутбуки Xiaomi", "Электро Самокаты", "Беговые Дорожки"]
    getProducts()
    const [activeId, setActiveId] = useState(0)
    return (
        <>
            <div className={style.nav}>
                {testCategories.map((name, index) =>
                    <span id={index}
                          onClick={() => setActiveId(index)}
                          className={`${activeId === index ? style.activeNav : style.navElement}`}>
                        {name}
                    </span>)}
            </div>
            <div className={style.category}>
                <div className={style.cards}>
                    {testProducts.map((i, ind) => <ProductCard id={ind}/>)}
                </div>
            </div>
        </>
    );
};

const mapStateToProps = () => ({})


export default connect(mapStateToProps, {getProducts})(ProductsCategory)
