import React, {useEffect} from 'react';
import style from "./reviews.module.css"
import {connect} from "react-redux";
import {getReviews} from "../../redux/reducers/mainReducer";

const ReviewCard = ({link, title}) => {

    return (
        <div className={style.card}>
            <iframe width="400" height="200"
                    src={link}
                    title={title} frameBorder="0"
                    allowFullScreen/>
            <div className={style.line}>
                <div className={style.title}>{title}</div>
            </div>
        </div>
    )
}


const Reviews = ({getReviews, reviews}) => {

    useEffect(() => {
        getReviews()
    }, [])

    return (
        <div>
            <h3 className={style.name}>Обзоры</h3>
            <div className={style.cards}>
                {reviews && reviews.reviews.map((review) => <ReviewCard title={review.name} link={review.video}/>)}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    reviews: state.main.reviews
})

export default connect(mapStateToProps, {getReviews})(Reviews);
