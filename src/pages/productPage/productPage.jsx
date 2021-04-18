import React, {useState} from 'react';
import styles from "./productPage.module.css"
import img from "../../assets/xiaomi-redmi-note-9-pro.jpeg"
import {Button} from "@material-ui/core";


const ProductPage = () => {

    const [activeImgId, setActiveImgId] = useState(0)

    let [activeImg, setActiveImg] = useState(null)

    return (
        <div className={styles.wrapper}>

            <div className={styles.smallImages}>
                {[img, img, img].map((value, index) =>
                    <div onClick={() => {
                        setActiveImgId(index);
                        setActiveImg(value)
                    }}>
                        <img className={index !== activeImgId && styles.notActiveImg} src={value} alt=""/>
                    </div>
                )}
            </div>
            <div className={styles.mainImage}>
                <img src={activeImg ? activeImg : img} alt=""/>
            </div>
            <div className={styles.info}>
                <div className={styles.title}>
                    Xiaomi mi 11
                </div>
                <div className={styles.price}>
                    500 000 - 570 000 KZT
                </div>
                <div className={styles.actions}>
                    <Button className={styles.addToCart}>В корзину</Button>
                    <Button className={styles.buy}>Купить</Button>
                </div>
                <div className={styles.caption}>
                    <strong>Процессор</strong>: Qualcomm Snapdragon 662;<br/>
                    <strong>Объем оперативной памяти</strong>: 4 Гб;<br/>
                    <strong>Объем флэш памяти</strong>: 128 Гб;<br/>
                    <strong>Количество ядер процессора</strong>: 8;<br/>
                    <strong>Макс. частота процессора</strong>: 2 ГГц;<br/>
                    <strong>Аккумулятор</strong>: 6000 мАч;<br/>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
