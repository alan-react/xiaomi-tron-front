import React, {lazy, Suspense} from 'react';
import {Switch, Route} from "react-router-dom"

import News from "../pages/news/news";
import Reviews from "../pages/reviews/reviews";
import BaseLoader from "../components/loader/loader";

const HomePage = lazy(() => import("../pages/homePage/homePage"))

const Routes = () => {
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
            </Switch>
        </Suspense>
    );
};

export default Routes;
