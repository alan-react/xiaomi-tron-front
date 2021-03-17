import React, {useRef, useState} from "react";

import Header from "./components/header/header";

import './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./routes/routes";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Cart from "./components/cart/cart";
import Forgot from "./components/forgot/forgot";
import {connect} from "react-redux";
import {login} from "./redux/reducers/authReducer";

const App = ({login, isAuth}) => {

    const [showLogin, setShowLogin] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showForgot, setShowForgot] = useState(false)

    const HandleShowLogin = () => setShowLogin(true)
    const HandleCloseLogin = () => setShowLogin(false)

    const HandleShowCart = () => setShowCart(true)
    const HandleCloseCart = () => setShowCart(false)

    const HandleShowForgot = () => setShowForgot(true)
    const HandleCloseForgot = () => setShowForgot(false)

    const footerRef = useRef()

    return (
        <>
            <Header isAuth={isAuth} footerRef={footerRef} showLogin={HandleShowLogin} showCart={HandleShowCart}/>
            <Login login={login} closeLogin={HandleCloseLogin} showLogin={showLogin} showForgot={HandleShowForgot} />
            <Forgot closeForgot={HandleCloseForgot} showForgot={showForgot}/>
            <Cart showCart={showCart} closeCart={HandleCloseCart}/>
            <Routes/>
            <Footer footerRef={footerRef} />
        </>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(App)
