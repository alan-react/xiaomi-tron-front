import React from 'react';
import style from "./news.module.css"
import Button from "@material-ui/core/Button";


const NewsCard = () => {
    return (
        <div className={style.card}>
            <h3>lorem</h3>
        <div>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Ab consequatur corporis debitis doloribus eaque ipsum
            iste itaque, possimus quam saepe?
            iste itaque, possimus quam saepe?
            iste itaque, possimus quam saepe?
            possimus quam
        </div>
            <div className={style.footer}>
                <Button variant="outlined" color="inherit" className={style.button}>Смотреть</Button>
            </div>
        </div>
    )
}


const News = () => {
    const test = [1,2,3,4,5,6]

    return (
        <div className={style.cards}>
            {test.map(() => <NewsCard/>)}
        </div>
    );
};

export default News;
