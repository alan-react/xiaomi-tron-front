import React from "react";

import {Button, Container, FormControl, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import styled from "styled-components"

import logo from "../../assets/Xiaomi_logo.png"

import style from "./header.module.css";

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav .nav-link {
    color: #adb1b8;
    &:hover {
        color: white
        }
    }
`

const Header = () => {
    return (
            <Styles>
                <Navbar collapsOnSelect expand="sm" className={style.header} >
                    <Container>
                        <Navbar.Brand><img src={logo} className={style.logo} alt="Logo png"/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className={style.links}>
                                <Nav.Link><Link to="/users">СМАРТФОНЫ</Link></Nav.Link>
                                <Nav.Link><Link to="/users">НОУТБУКИ</Link></Nav.Link>
                                <Nav.Link><Link to="/users">ГАДЖЕТЫ</Link></Nav.Link>
                                <Nav.Link><Link to="/users">АКСЕСУАРЫ</Link></Nav.Link>
                                <FormControl type="text" placeholder="Поиск..." custom={true} className={style.inputSearch} />
                                <Button className={style.button} variant="outline-light">Зарегестрироваться</Button>
                                <Button className={style.button} variant="outline-light">Войти</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>
    )
}

// /*<img src={logo} alt="Logo png"/>*/
// /*<div className={style.links}>*/
// /*    <div>КАТАЛОГ</div>*/
// /*    <div>О КОМПАНИИ</div>*/
// /*    <div>АДРЕС ОФИСА</div>*/
// /*    <div>+88005553535</div>*/
// /*    <div><input className={style.searchInput} type="search" name="search" placeholder="Поиск..."/></div>*/
// /*    <div>Зарегестироваться / Войти</div>*/
// /*</div>*/

export default Header
