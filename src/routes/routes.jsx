import React, {lazy, Suspense} from 'react';
import {Route, Switch} from "react-router-dom"

import BaseLoader from "../components/loader/loader";
import Login from "../components/login/login";
import CartPage from "../pages/cartPage/cartPage";
import NotFound from "../pages/notFound/notFound";

const HomePage = lazy(() => import("../pages/homePage/homePage"))
const Reviews = lazy(() => import("../pages/reviews/reviews"))
const News = lazy(() => import("../pages/news/news"))

// нужен токен для каждого не вошедшего пользователя
// что бы хранить продукты в корзине без авторизации
// в стрнице покупки попросить указать имя номер тел и адрес

const Routes = () => {


    if (window.location.href === "http://localhost:3000/admin") {
        window.location = "http://127.0.0.1:8000/admin"
    }

    return (
        <Suspense fallback={<BaseLoader/>}>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/news">
                    <News/>
                </Route>
                <Route exact path="/reviews">
                    <Reviews/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/cart">
                    <CartPage/>
                </Route>
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </Suspense>
    );
};

export default Routes;
