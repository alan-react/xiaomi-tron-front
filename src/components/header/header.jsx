import React, {useEffect, useRef, useState} from "react";

import {Button, Container, FormControl, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import styled from "styled-components"

import logo from "../../assets/Xiaomi_logo.png"

import style from "./header.module.css";

const Styles = styled.div`
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #adb1b8;

    &:hover {
      color: white
    }
  }
`

const Header = ({showLogin, showCart, footerRef, isAuth, getProducts, searchProducts}) => {

    const focusHandler = () => footerRef.current.focus()

    const [searchValue, setSearchValue] = useState("")
    const handleSearchValue = (e) => setSearchValue(e.target.value)
    const handleEnterPress = (e) => {
        if (e.key === "Enter") {
            getProducts(searchValue)
        }
    }

    const [openModalSearch, setOpenModalSearch] = useState(false)

    useEffect(() => {
        document.body.onclick = () => {
            setOpenModalSearch(false)
        }
        if (searchProducts) {
            setOpenModalSearch(true)
        }
    }, [searchProducts])

    useEffect(() => {
        if (searchValue) setTimeout(() => getProducts(searchValue), 1000)
    }, [searchValue])

    return (
        <Styles>
            <Navbar collapsOnSelect expand="sm" className={style.header}>
                <Container className={style.container}>
                    <Navbar.Brand>
                        <Link to="/"><img src={logo} className={style.logo} alt="Logo png"/></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={style.links}>
                            <Nav.Link><Link to="/">ГЛАВНАЯ</Link></Nav.Link>
                            <Nav.Link><Link to="/news">НОВОСТИ</Link></Nav.Link>
                            <Nav.Link><Link to="/reviews">ОБЗОРЫ</Link></Nav.Link>
                            <Nav.Link><Link onClick={focusHandler}>АДРЕСА И КОНТАКТЫ</Link></Nav.Link>
                            <div>
                                <FormControl type="text" placeholder="Поиск..."
                                             custom={true} value={searchValue}
                                             onChange={handleSearchValue}
                                             onKeyPress={handleEnterPress}
                                             className={style.inputSearch}/>
                                {openModalSearch &&
                                <div className={style.searchResult}>
                                    {searchProducts.map((el) =>
                                        <div className={style.resElement}>
                                                <img src={el.image} width="40"/>
                                                <div className={style.titlePrice}>
                                                    <h5 className={style.title}>{el.name}</h5>
                                                    <div className={style.price}>{el.price}</div>
                                                </div>
                                        </div>
                                    )}
                                </div>
                                }
                            </div>

                            <Button onClick={showCart} className={style.button} variant="outline-light">
                                Корзина
                            </Button>
                            <Button className={style.button} variant="outline-light">
                                Зарегестрироваться
                            </Button>
                            {isAuth
                                ? <Button className={style.button}
                                          variant="outline-light">
                                    Выйти
                                </Button>
                                : <Button onClick={showLogin}
                                          className={style.button}
                                          variant="outline-light">
                                    Войти
                                </Button>
                            }
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
