import React, {useEffect, useState} from 'react';
import styles from "./navbar.module.css"
import cart from "../../assets/cart.png"
import {Link} from "react-router-dom";
import ico from "../../assets/shopping-cart-empty-side-view.png"

const Navbar = ({showCart, getProducts, searchProducts}) => {

    const [searchValue, setSearchValue] = useState("")
    const handleSearchValue = (e) => setSearchValue(e.target.value)
    const handleEnterPress = (e) => {
        if (e.key === "Enter") {
            getProducts(searchValue)
        }
    }

    const [openModalSearch, setOpenModalSearch] = useState(false)

    useEffect(() => {
        document.body.onclick = () => {
            setOpenModalSearch(false)
        }
        if (searchProducts) {
            setOpenModalSearch(true)
        }
    }, [searchProducts])

    useEffect(() => {
        if (searchValue) setTimeout(() => getProducts(searchValue), 1000)
    }, [searchValue])

    return (
        <div className={styles.nav}>
            <Link to="/" className={styles.navElement}>
                <label className={styles.hamburger}>
                    <div></div>
                    <div></div>
                    <div></div>
                </label>
                Категории</Link>
            <Link to="/news" className={styles.navElement}>Новости</Link>
            <Link className={styles.navElement}>Адреса и контакты</Link>
            <div onClick={showCart} className={styles.navElement}>Корзина
                <img src={ico} className={styles.cart} alt="cart png"/>
            </div>
            <input value={searchValue} onChange={handleSearchValue} onKeyPress={handleEnterPress}
                   type="text" placeholder="Поиск..." className={styles.search}/>
            {openModalSearch &&
            <div className={styles.searchResult}>
                {searchProducts.map((el) =>
                    <div className={styles.resElement}>
                        <img src={el.image} width="40"/>
                        <div className={styles.titlePrice}>
                            <h5 className={styles.title}>{el.name}</h5>
                            <div className={styles.price}>{el.price}</div>
                        </div>
                    </div>
                )}
            </div>
            }
        </div>
    );
};

export default Navbar;
