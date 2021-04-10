import React, {useEffect} from 'react';
import style from "./news.module.css"
import Button from "@material-ui/core/Button";
import img from "../../assets/mini.jpg"
import imgRabbit from "../../assets/bunny.png"
import {connect} from "react-redux";
import {getNews} from "../../redux/reducers/newsReducer";
import BaseLoader from "../../components/loader/loader";
import newImg from "../../assets/Xiaomi-Mi-TV.jpg"

const NewsCard = ({text, name}) => {
    // style={{backgroundImage: `url(${img})`}}

    const kitcut = (text, limit) => {
        text = text.trim();
        if( text.length <= limit) return text;

        text = text.slice(0, limit);

        return text.trim() + "...";
    }

    return (
        <div className={style.newsCard}>
            <img src={newImg} alt="img"/>
            <div className={style.info}>
                <h4 className={style.title}>Заголовок новости</h4>
                <div className={style.date}>12.01.2021</div>
            </div>
        </div>
    )
}

// <div className={style.card}>
//     <h3 className={style.title}>{name}</h3>
//     <div className={style.cardText}>
//         {kitcut(text, 100)}
//     </div>
//     <div className={style.footer}>
//         <Button variant="outlined" color="inherit" className={style.button}>Смотреть</Button>
//         <img className={style.bunny} src={imgRabbit} alt="logo"/>
//     </div>
// </div>

const News = ({getNews, news}) => {

    // useEffect(() => {
    //     if (!news) getNews()
    // }, [news])
    // if (news)
    return (
        <div className={style.wrapper}>
            <h3>Новости</h3>
            <div className={style.cards}>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
            </div>
        </div>
    )
    // else return <BaseLoader/>
}

const mapStateToProps = (state) => ({
    news: state.news.News
})

export default connect(mapStateToProps, {getNews})(News);
