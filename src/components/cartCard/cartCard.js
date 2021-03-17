import React from 'react';
import style from "./cartCard.module.css"
import {Button} from "react-bootstrap";


const CartCard = () => {
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.card}>
                    <div className={style.cardСoll}>
                        <img className={style.img}
                             alt="img"
                             src="https://xiaomi-store.kz/templates/yootheme/cache/Xiaomi_logo_new-b81376ff.webp"/>
                        <div className={style.description}>
                            <div className={style.title}>
                                Xiaomi Redmi Note 9
                            </div>
                            <div className={style.price}>
                                80 000 KZT
                            </div>
                        </div>
                    </div>
                    <Button className={style.button} variant="success">Удалить</Button>
                </div>
            </div>
        </>
    );
};

export default CartCard;
