import React from 'react';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../../assets/Xiaomi_logo.png"
import style from "./mobileHeader.module.css"
import {Link} from "react-router-dom";

const MobileHeader = () => {
    return (
        <>
            <Navbar className={style.header} expand="sm">
                <Navbar.Brand href="#home" className={style.logo}>
                    <img src={logo} width="40" height="40" alt="logo png"/>
                    <h2 className={style.logoTitle}>Xiaomi Tron</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-sm-n2">
                        <Nav.Link href="#home"><Link>Главная</Link></Nav.Link>
                        <Nav.Link href="#link"><Link>Новости</Link></Nav.Link>
                        <Nav.Link href="#link"><Link>Обзоры</Link></Nav.Link>
                        <Nav.Link href="#link"><Link>Адреса и контакты</Link></Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default MobileHeader;
