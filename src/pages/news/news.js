import React, {useEffect} from 'react';
import style from "./news.module.css"
import Button from "@material-ui/core/Button";
import img from "../../assets/mini.jpg"
import imgRabbit from "../../assets/bunny.png"
import {connect} from "react-redux";
import {getNews} from "../../redux/reducers/newsReducer";
import BaseLoader from "../../components/loader/loader";

const NewsCard = ({text, name}) => {
    // style={{backgroundImage: `url(${img})`}}

    const kitcut = (text, limit) => {
        text = text.trim();
        if( text.length <= limit) return text;

        text = text.slice(0, limit);

        return text.trim() + "...";
    }

    return (
        <div className={style.card}>
            <h3 className={style.title}>{name}</h3>
            <div className={style.cardText}>
                {kitcut(text, 100)}
            </div>
            <div className={style.footer}>
                <Button variant="outlined" color="inherit" className={style.button}>Смотреть</Button>
                <img className={style.bunny} src={imgRabbit} alt="logo"/>
            </div>
        </div>
    )
}


const News = ({getNews, news}) => {

    useEffect(() => {
        if (!news) getNews()
    }, [news])
    if (news) return (
        <div className={style.wrapper}>
            <div className={style.cards}>
                {news.map((n, index) => <NewsCard name={n.name} key={index} text={n.information}/>)}
            </div>
        </div>
    )
    else return <BaseLoader/>
}

const mapStateToProps = (state) => ({
    news: state.news.News
})

export default connect(mapStateToProps, {getNews})(News);
