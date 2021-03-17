import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {mainReducer} from "./reducers/mainReducer";
import authReducer from "./reducers/authReducer";

const reducers = combineReducers({
    main: mainReducer,
    auth: authReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

window.__store__ = store

export default store
