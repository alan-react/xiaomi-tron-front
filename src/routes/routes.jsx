import React, {lazy, Suspense} from 'react';
import {Route, Switch, useLocation} from "react-router-dom"

import BaseLoader from "../components/loader/loader";
import Login from "../components/login/login";
import CartPage from "../pages/cartPage/cartPage";
import NotFound from "../pages/notFound/notFound";
import ProductPage from "../pages/productPage/productPage";

const HomePage = lazy(() => import("../pages/homePage/homePage"))
const News = lazy(() => import("../pages/news/news"))

// нужен токен для каждого не вошедшего пользователя
// что бы хранить продукты в корзине без авторизации
// в стрнице покупки попросить указать имя номер тел и адрес

const Routes = () => {

    const location = useLocation()

    if (location.href === "http://localhost:3000/admin") {
        window.location = "http://127.0.0.1:8000/admin"
    }

    return (
        <Suspense fallback={<BaseLoader/>}>
            <Switch location={location} key={location.key}>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/news">
                    <News/>
                </Route>
                <Route exact path="/login">
                    <Login showLogin={true}/>
                    <HomePage/>
                </Route>
                <Route exact path="/cart">
                    <CartPage/>
                </Route>
                <Route exact path="/product/:slug">
                    <ProductPage/>
                </Route>
                <Route path="*" >
                    <NotFound/>
                </Route>
            </Switch>
        </Suspense>
    );
};

export default Routes;
