import React from "react";
import {Link} from "react-router-dom";

import logo from "../../assets/pngwing.com.png"

import style from "./header.module.css";
import {div} from "mdb-ui-kit/src/js/mdb/perfect-scrollbar/lib/dom";

// const Styles = styled.div`
//   a, .navbar-brand, .navbar-nav .nav-link {
//     color: #adb1b8;
//
//     &:hover {
//       color: white
//     }
//   }
// `

const Header = ({showLogin, isAuth, getProducts, searchProducts}) => {


    return (
        <header className={style.header}>
                <div style={{display: "flex"}}>
                    <Link to='/'>
                        <img style={{cursor: "pointer", backgroundColor: "orange"}} src={logo} width="40px" alt="Logo png"/>
                    </Link>
                    <h1 className={style.title}><Link to="/">Xiaomi Tron</Link></h1>
                </div>
            {isAuth ?
               <div></div>
             :  <div className={style.buttons}>
                    <div className={style.button}>Регистрация</div>
                    <div className={style.button} onClick={showLogin}>Войти</div>
                </div>}
        </header>
    )
}


export default Header

//
// <Styles>
// <Navbar collapsOnSelect expand="sm" className={style.header}>
//     <Container className={style.container}>
//     <Navbar.Brand>
//     <Link to="/"><img src={logo} className={style.logo} alt="Logo png"/></Link>
// </Navbar.Brand>
// <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
// <Navbar.Collapse id="responsive-navbar-nav">
// <Nav className={style.links}>
// <Nav.Link><Link to="/">ГЛАВНАЯ</Link></Nav.Link>
// <Nav.Link><Link to="/news">НОВОСТИ</Link></Nav.Link>
// <Nav.Link><Link to="/reviews">ОБЗОРЫ</Link></Nav.Link>
// <Nav.Link><Link onClick={focusHandler}>АДРЕСА И КОНТАКТЫ</Link></Nav.Link>
// <div>
// <FormControl type="text" placeholder="Поиск..."
// custom={true} value={searchValue}
// onChange={handleSearchValue}
// onKeyPress={handleEnterPress}
// className={style.inputSearch}/>

// </div>
//
// <Button onClick={showCart} className={style.button} variant="outline-light">
// Корзина
// </Button>
// <Button className={style.button} variant="outline-light">
// Зарегестрироваться
// </Button>
// {isAuth
// ? <Button className={style.button}
// variant="outline-light">
// Выйти
// </Button>
// : <Button onClick={showLogin}
// className={style.button}
// variant="outline-light">
// Войти
// </Button>
// }
// </Nav>
// </Navbar.Collapse>
// </Container>
// </Navbar>
// </Styles>
