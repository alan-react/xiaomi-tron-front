import React, {useEffect, useState} from "react";

import Header from "./components/header/header";

import style from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./routes/routes";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Cart from "./components/cart/cart";
import Forgot from "./components/forgot/forgot";
import {connect} from "react-redux";
import {login} from "./redux/reducers/authReducer";
import {getProductsBySearch, initialize} from "./redux/reducers/mainReducer";
import BaseLoader from "./components/loader/loader";
import Navbar from "./components/navbar/navbar";
import Alert from "./components/alert/alert";
import Reg from "./components/reg/reg";
import {AuthApi} from "./api/api";

const App = ({
                 login, isAuth, getProductsBySearch,
                 searchProducts, initialize, initialized
             }) => {

    const [showLogin, setShowLogin] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showForgot, setShowForgot] = useState(false)
    const [showReg, setShowReg] = useState(false)

    useEffect(() => {
        initialize()
    }, [])

    useEffect(() => {
        // 1 имя 2 фамилия 3 email 4 номер 5 пароль
        AuthApi.reg("", "", "", "", "")
        // можешь перейти в файл /api/api.js и поменять передаваемые параметры
    }, [])

    const HandleShowLogin = () => setShowLogin(true)
    const HandleCloseLogin = () => setShowLogin(false)

    const HandleShowCart = () => setShowCart(true)
    const HandleCloseCart = () => setShowCart(false)

    const HandleShowForgot = () => setShowForgot(true)
    const HandleCloseForgot = () => setShowForgot(false)

    const HandleShowReg = () => setShowReg(true)
    const HandleCloseReg = () => setShowReg(false)

    if (initialized) return (
        <>
            <Header isAuth={isAuth} showLogin={HandleShowLogin} showReg={HandleShowReg}/>
            <Navbar getProducts={getProductsBySearch}
                    searchProducts={searchProducts} showCart={HandleShowCart}/>
            <Login login={login} closeLogin={HandleCloseLogin} showLogin={showLogin}
                   showForgot={HandleShowForgot}/>
            <Forgot closeForgot={HandleCloseForgot} showForgot={showForgot}/>
            <Cart showCart={showCart} closeCart={HandleCloseCart}/>
            <Reg showReg={showReg} closeReg={HandleCloseReg}/>
            <Routes/>
            <div className={style.alertContainerHolder}>
            <Alert/>
            </div>
            <Footer/>
        </>
    )
    else return <BaseLoader/>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    searchProducts: state.main.searchProducts,
    initialized: state.main.initialized,
})

export default connect(mapStateToProps, {login, getProductsBySearch, initialize})(App)
