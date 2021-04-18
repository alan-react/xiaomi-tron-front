import React, {useState} from 'react';
import style from "./login.module.css"
import {Modal} from "react-bootstrap";
import {Button} from "@material-ui/core";
import validator from "validator";
import {connect} from "react-redux";

const Login = ({showLogin, closeLogin, showForgot, login, isAuth}) => {

    const [passwordValue, setPasswordValue] = useState("")
    const handleChangePassword = (e) => setPasswordValue(e.target.value)

    const [emailValue, setEmailValue] = useState("")

    const [error, setError] = useState(null)

    const handleChangeEmail = (e) => {
        setEmailValue(e.target.value)
        if (!!validator.isEmail(e.target.value)) {
            setError(null)
        } else {
            setError('Введите корректный Email')
        }

    }

    const handleLogin = () => {
        login(emailValue, passwordValue)
        if (!emailValue) {setError("Заполните Email ")}
        if (!passwordValue || passwordValue.length < 6 ) {setError("Введите корректный пароль")}
        if (isAuth) {
            setPasswordValue("")
            setEmailValue("")
            closeLogin()
        }
    }

    return (
        <>
            <Modal centered={true} show={showLogin} onHide={closeLogin}>
                <form className={style.form}>
                    <Modal.Header className={style.loginHeader}>
                        <h3>Авторизация</h3>
                    </Modal.Header>
                    <div className={style.formWrapper}>
                        <div>
                            <label>Email</label>
                            <input type="email"
                                   name="email"
                                   value={emailValue}
                                   onChange={handleChangeEmail}
                                   className={style.input}
                                   placeholder="Введите email"/>
                        </div>
                        <div className="form-group">
                            <label>Пароль</label>
                            <div>
                                <input type="password"
                                       name="password"
                                       value={passwordValue}
                                       onChange={handleChangePassword}
                                       className={style.input}
                                       placeholder="Введите пароль"/>
                            </div>
                        </div>
                        {error && <span className={style.formError}>{error}</span>}

                        <div>
                            <div className="custom-control custom-checkbox mt-2 mb-2">
                                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                <label className="custom-control-label" htmlFor="customCheck1">Запомнить меня</label>
                            </div>
                        </div>

                        <Button variant="contained"
                                className={style.button}
                                color="default"
                                onClick={handleLogin}>
                            Войти</Button>
                        <p className="forgot-password text-right mt-2">
                            Забыли <a onClick={() => {showForgot(); closeLogin()}}>пароль?</a>
                        </p>

                    </div>
                </form>
            </Modal>
        </>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps)(Login)
