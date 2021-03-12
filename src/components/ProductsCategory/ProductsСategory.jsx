import React, {useState} from 'react';
import ProductCard from "../сards/card";
import style from "./ProductsCategory.module.scss"
import {connect} from "react-redux";
import {getProducts} from "../../redux/reducers/mainReducer";
import BaseLoader from "../loader/loader"


const ProductsCategory = ({getProducts, products}) => {

    const testCategories = ["Смартфоны Xiaomi", "Ноутбуки Xiaomi", "Электро Самокаты", "Беговые Дорожки"]
    if (!products) getProducts()
    const [activeId, setActiveId] = useState(0)
    if (products) {
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
                        {products.products.map((i, ind) =>
                            <ProductCard id={ind} img={"../../images" + i.image} available={i.available}
                                         title={i.name} price={i.price}/>
                            )}
                    </div>
                </div>
            </>
        );
    }
    else return BaseLoader
}

const mapStateToProps = (state) => ({
    products: state.main
})


export default connect(mapStateToProps, {getProducts})(ProductsCategory)
