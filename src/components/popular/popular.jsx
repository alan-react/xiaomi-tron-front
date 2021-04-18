import React, {useEffect} from 'react';
import PopularProductCard from "../popularProductCard/popularProductCard";
import style from "./popular.module.scss"
import {connect} from "react-redux";
import {getPopularProducts, showAlert} from "../../redux/reducers/mainReducer";

const Popular = ({products, getPopularProducts, showAlert, closeAlert}) => {
    const test = [0, 14, 14, 14, 1, 1]

    useEffect(() => {
        if (!products) getPopularProducts()
    }, [products])

    return (
        <div className={style.wrapper}>
            <h3 className={style.title}>Популярные Товары</h3>
            <div className={style.cards}>
                {products && products.map((product, id) => (
                        <>
                            <PopularProductCard showAlert={showAlert} key={id} image={product.image}
                                                actualPrice={product.newprice}
                                                title={product.name}
                                                oldPrice={product.oldprice}/>
                            <PopularProductCard showAlert={showAlert} key={id} image={product.image}
                                                actualPrice={product.newprice}
                                                title={product.name}
                                                oldPrice={product.oldprice}/>
                            <PopularProductCard showAlert={showAlert} key={id} image={product.image}
                                                actualPrice={product.newprice}
                                                title={product.name}
                                                oldPrice={product.oldprice}/>
                            <PopularProductCard showAlert={showAlert} key={id} image={product.image}
                                                actualPrice={product.newprice}
                                                title={product.name}
                                                oldPrice={product.oldprice}/>
                            <PopularProductCard showAlert={showAlert} key={id} image={product.image}
                                                actualPrice={product.newprice}
                                                title={product.name}
                                                oldPrice={product.oldprice}/>
                            <PopularProductCard showAlert={showAlert} key={id} image={product.image}
                                                actualPrice={product.newprice}
                                                title={product.name}
                                                oldPrice={product.oldprice}/>
                        </>
                    )
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    products: state.main.popularProducts
})

export default connect(mapStateToProps, {getPopularProducts, showAlert})(Popular)
