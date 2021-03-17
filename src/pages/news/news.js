import React from 'react';
import style from "./news.module.css"
import Button from "@material-ui/core/Button";
import img from "../../assets/mini.jpg"
import imgRabbit from "../../assets/bunny.png"

const NewsCard = () => {
    // style={{backgroundImage: `url(${img})`}}
    return (
        <div className={style.card} >
            <h3 className={style.title}>lorem</h3>
            <div className={style.cardText}>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. At, quibusdam?
            </div>
            <div className={style.footer}>
                <Button variant="outlined" color="inherit" className={style.button}>Смотреть</Button>
                <img className={style.bunny} src={imgRabbit} alt="logo"/>
            </div>
        </div>
    )
}


const News = () => {
    const test = [1, 2, 3, 4, 5, 6]

    return (
        <div className={style.cards}>
            {test.map(() => <NewsCard/>)}
        </div>
    );
};

export default News;
