import React from 'react';

import ProductCard from "../сards/card";

import style from "./popular.module.css"

const Popular = () => {
    const test = [0,1,2]

    return (
        <div>
            <div className={style.cards}>
                {test.map(() => <ProductCard/>)}
            </div>
        </div>
    );
};

export default Popular;
