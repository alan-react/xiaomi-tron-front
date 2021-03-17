import React from 'react';
import style from "./footer.module.css"
import classNames from "classnames";

const Footer = ({footerRef}) => {
    return (
        <footer id="footer" className={style.wrapper}>
            <div className={classNames(style.content, style.container)}>
                <div className={style.title}>ИНФОРМАЦИЯ</div>
                <div className={style.contacts} ref={footerRef} tabIndex="0">
                    <div className={style.title}>АДРЕСА</div>
                    <div className={style.title}>КОНТАКТЫ</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
