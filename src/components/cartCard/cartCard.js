import React from 'react';
import style from "./cartCard.module.css"
import {Button} from "react-bootstrap";
import img from "../../assets/xiaomi-redmi-note-9-pro.jpeg"

const CartCard = () => {
    return (
        <>
            <div className={style.wrapper}>
                <img src={img} alt="img" width="100"/>
                <h5 className={style.title}>Xiaomi redmi note 9 pro</h5>
            </div>
        </>
    );
};

export default CartCard;
