import React from 'react';
import style from "./homePage.module.css";
import Card from "../../components/сards/card";


const HomePage = () => {
    return (
        <div className={style.wrapper}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
};

export default HomePage;
