import React from 'react';
import {Link} from "react-router-dom";
import style from "./notFound.module.css"
import img from "../../assets/pppp-removebg-preview.png"


const NotFound = () => {
    return (
            <div className={style.wrapper}>
                <h2>404</h2>
                <div>Страница не найдена. Вернуться <Link to="/">назад</Link></div>
                <img className={style.img} src={img} alt="bunny 404"/>
            </div>
    );
};

export default NotFound;
