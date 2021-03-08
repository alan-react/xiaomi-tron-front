import React from 'react';
import ProductCard from "../сards/card";
import style from "./ProductsCategory.module.css"
import {getProducts} from "../../redux/reducers/mainReducer";
import {connect} from "react-redux";

const ProductsCategory = ({getProducts}) => {
    const test = [1,2,3,4,5,6,7,8,9]
    getProducts()


    return (
        <div className={style.category}>
            <div className={style.cards}>
                {test.map(() => <ProductCard/>)}
            </div>
        </div>
    );
};

const mapStateToProps = () => ({

})


export default connect(mapStateToProps, {getProducts})(ProductsCategory)
