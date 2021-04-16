import React, {useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";
import style from "./notFound.module.css"
import img from "../../assets/pppp-removebg-preview.png"


const NotFound = () => {

    const history = useHistory()

    useEffect(() => {
        setTimeout(() => history.replace("/"), 5000)
        return function cleanup () {
            clearTimeout()
        }
    }, [])

    return (
            <div className={style.wrapper}>
                <h2>404</h2>
                <div>Страница не найдена. Вернуться <Link to="/">назад</Link></div>
                <img className={style.img} src={img} alt="bunny 404"/>
            </div>
    );
};

export default NotFound;
