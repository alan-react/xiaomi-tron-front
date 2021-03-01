import React from 'react';
import style from "./homePage.module.css";
import Navbar from "../../components/navbar/navbar";
import Slider from "../../components/slider/slider";


const HomePage = () => {
    return (
        <div className={style.wrapper}>
            <Navbar/>
            <Slider/>
        </div>
    );
};

export default HomePage;
