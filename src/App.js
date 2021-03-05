import React from "react";

import HomePage from "./pages/homePage/homePage";
import Header from "./components/header/header";

import './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  return (
    <>
        <Header/>
        <HomePage/>
    </>
  );
}

export default App;
