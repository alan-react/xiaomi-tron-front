import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

import mainReducer from "./reducers/mainReducer";
import authReducer from "./reducers/authReducer";
import newsReducer from "./reducers/newsReducer";
import cartReducer from "./reducers/cartReducer";

const reducers = combineReducers({
    main: mainReducer,
    auth: authReducer,
    news: newsReducer,
    cart: cartReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

window.__store__ = store

export default store
