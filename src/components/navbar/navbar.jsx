import React from 'react';
import style from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className={style.nav}>
            <h1 className={style.logoName}>XIAOMI TRON</h1>
            <div className={style.navLinks}>
                <div>Главная</div>
                |
                <div>Телефоны</div>
                |
                <div>Ноутбуки</div>
                |
                <div>Аксесуары</div>
                |
                <div>Прочее</div>
            </div>
        </div>
    );
};

export default Navbar;
