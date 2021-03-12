import React, {useState} from "react";

import Header from "./components/header/header";

import './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./routes/routes";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";


const App = () => {

    const [showLogin, setShowLogin] = useState(false)
    const HandleShowLogin = () => setShowLogin(true)
    const HandleCloseLogin = () => setShowLogin(false)

    return (
        <>
            <Header showLogin={HandleShowLogin}/>
            <Login closeLogin={HandleCloseLogin} showLogin={showLogin}/>
            <Routes/>
            <Footer/>
        </>
    )
};

export default App;
