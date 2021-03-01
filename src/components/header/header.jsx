import style from "./header.module.css";

import React from "react";

import logo from "../../assets/Xiaomi_logo.png"

const Header = () => {
    return (
        <header className={style.header}>
            <img src={logo} alt="Logo png"/>
                <div>КАТАЛОГ</div>
                <div>О КОМПАНИИ</div>
                <div>АДРЕС ОФИСА</div>
                <div>+88005553535</div>
                <div><input className={style.searchInput} type="search" name="search" placeholder="Поиск..."/></div>
                <div>Зарегестироваться / Войти</div>
        </header>
    )
}

export default Header
