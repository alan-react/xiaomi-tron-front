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
                <Navbar collapsOnSelect expand="sm" className={style.header} variant="dark">
                    <Container>
                        <Navbar.Brand><img src={logo} className={style.logo} alt="Logo png"/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link className={style.links}><Link to="/">КАТАЛОГ</Link></Nav.Link>
                                <Nav.Link className={style.links}><Link to="/users">О КОМПАНИИ</Link></Nav.Link>
                                <Nav.Link>+88005553535</Nav.Link>
                            <Nav>
                                <FormControl type="text" placeholder="Поиск..." className="mr-sm-2" />                            </Nav>
                                <Button variant="primary" className="mr-2">Log in</Button>
                                <Button variant="primary">Sign out</Button>
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
