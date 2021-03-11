import React from 'react';
import style from "./footer.module.css"
import classNames from "classnames";

const Footer = () => {
    return (
        <footer className={style.wrapper}>
            <div className={classNames(style.content, style.container)}>
                    <div className={style.title}>ИНФОРМАЦИЯ</div>
            </div>
        </footer>
    );
};

export default Footer;
