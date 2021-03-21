import React, {useEffect, useState} from 'react';
import ProductCard from "../сards/card";
import style from "./ProductsCategory.module.scss"
import {connect} from "react-redux";
import {getProducts} from "../../redux/reducers/mainReducer";
import BaseLoader from "../loader/loader"


const ProductsCategory = React.memo(({getProducts, products}) => {

        const testCategories = ["Флагманы Xiaomi", "Игровые смартфоны", "Ноутбуки"]

        useEffect(() => {
            if (!products) getProducts()
            debugger
        }, [products])

        console.log(products)
        const [activeId, setActiveId] = useState(0)
        if (products) {
            return (
                <>
                    <div className={style.nav}>
                        {testCategories.map((name, index) =>
                            <span key={index}
                                  onClick={() => setActiveId(index)}
                                  className={`${activeId === index ? style.activeNav : style.navElement}`}>
                        {name}
                    </span>)}
                    </div>
                    <div className={style.category}>
                        <div className={style.cards}>
                            {products.products && products.products.map((i, ind) =>
                                <ProductCard key={ind} img={i.image} available={i.available}
                                             title={i.name} price={i.price}/>
                            )}
                        </div>
                    </div>
                </>
            );
        } else return <BaseLoader/>
    }
)

const mapStateToProps = (state) => ({
    products: state.main.products
})


export default connect(mapStateToProps, {getProducts})(ProductsCategory)
