import {Redirect, useHistory} from "react-router-dom"
import React, {useEffect} from 'react';
import style from "./news.module.css"
import Button from "@material-ui/core/Button";
import img from "../../assets/mini.jpg"
import imgRabbit from "../../assets/bunny.png"
import {connect} from "react-redux";
import {getNews} from "../../redux/reducers/newsReducer";
import BaseLoader from "../../components/loader/loader";
import newImg from "../../assets/Xiaomi-Mi-TV.jpg"

const NewsCard = ({text, title, image, link}) => {
    // style={{backgroundImage: `url(${img})`}}

    const kitcut = (text, limit) => {
        text = text.trim();
        if (text.length <= limit) return text;

        text = text.slice(0, limit);

        return text.trim() + "...";
    }
    const Redirect = () => {
        if (link !== undefined ) {
            window.location = link
        } else alert("новость отсутсвует")
    }

    return (
        <div className={style.newsCard} onClick={Redirect}>
            <img src={image} alt="img"/>
            <div className={style.info}>
                <h4 className={style.title}>{title}</h4>
                <div className={style.text}>{text}</div>
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

    useEffect(() => {
        getNews()
    }, [])

    return (
        <>
            <h3 className={style.newsHeader}>Новости</h3>

            <div className={style.wrapper}>
            <div className={style.cards}>
                {news.News && news.News.map(n => <>
                    <NewsCard title={n.title} image={n.image}
                              text={n.shortDescription}/>
                    <NewsCard title={n.title} image={n.image}
                              text={n.shortDescription} link={n.url}/>
                </>)}
            </div>
        </div>
        </>
    )
    // else return <BaseLoader/>
}

const mapStateToProps = (state) => ({
    news: state.news
})

export default connect(mapStateToProps, {getNews})(News);
