import React from 'react';
import style from "./navbar.module.css"
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={style.nav}>
            <h1 className={style.logoName}>XIAOMITRON</h1>
            <div className={style.navLinks}>
                <Link>Главная</Link>
                &nbsp;|&nbsp;
                <Link>Телефоны</Link>
                &nbsp;|&nbsp;
                <Link>Ноутбуки</Link>
                &nbsp;|&nbsp;
                <Link>Аксесуары</Link>
                &nbsp;|&nbsp;
                <Link>Прочее</Link>
            </div>
        </div>
    );
};

export default Navbar;
