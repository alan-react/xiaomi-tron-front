import React from 'react';
import style from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={style.wrapper}>
            <div className={style.content}>
                <div className={style.row}></div>
                <div className={style.title}>ИНФОРМАЦИЯ</div>
                <div className={style.title}>ИНФОРМАЦИЯ</div>
                <div className={style.title}>ИНФОРМАЦИЯ</div>
                <div className={style.title}>ИНФОРМАЦИЯ</div>
            </div>
        </footer>
    );
};

export default Footer;
