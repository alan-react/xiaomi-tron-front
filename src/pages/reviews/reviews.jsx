import React from 'react';
import ReactPlayer from "react-player";
import style from "./reviews.module.css"
import {Button} from "react-bootstrap";

const ReviewCard = () => {

    const [playVideo, setPlayVideo] = React.useState(true)

    return (
        <div className={style.card}>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=XFBRA0BSCsc"
                controls
                playing={true}
                onReady={true}
                width="390px"
                height="205px"
                light={playVideo}
            />
            <Button onClick={() => setPlayVideo(false)} variant="outline" className={style.title}>
                <h3>Обзор на redmi 9t</h3>
            </Button>
            <Button variant="outline-success" className={style.cartBtn}>В корзину</Button>
            <Button variant="outline-success" className={style.cartBtn}>В корзину</Button>
        </div>
    )
}


const Reviews = () => {
    return (
        <div className={style.cards}>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
        </div>

    );
};

export default Reviews;
