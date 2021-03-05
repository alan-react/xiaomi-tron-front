import React from 'react';
import ProductCard from "../сards/card";
import style from "./ProductsCategory.module.css"

const ProductsCategory = () => {
    const test = [1,2,3,4,5,6]
    return (
        <div className={style.category}>
            <div className={style.filter}>

            </div>
            <div className={style.cards}>
                {test.map(() => <ProductCard/>)}
            </div>
        </div>
    );
};

export default ProductsCategory;
