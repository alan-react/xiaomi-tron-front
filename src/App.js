import React from "react";

import Header from "./components/header/header";

import './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./routes/routes";
import Footer from "./components/footer/footer";


const App = () => {

  return (
    <>
        <Header/>
        <Routes/>
        <Footer/>
    </>
  );
}

export default App;
