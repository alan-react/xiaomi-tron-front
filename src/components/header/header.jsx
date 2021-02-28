import style from "./header.module.css";
import React from "react";


const Header = () => {
    return (
        <header className={style.header}>
            <div>Главная</div>
            <div>Смартфоны</div>
            <div>Компьютеры</div>
            <div>Аксессуары</div>
            <div>Гаджеты</div>
            <div><input className={style.searchInput} type="search" name="search" placeholder="Поиск..."/></div>
            <div>Зарегестироваться / Войти</div>
        </header>
    )
}

export default Header
