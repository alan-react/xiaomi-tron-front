import React, {useEffect, useState} from 'react';
import {Modal} from "react-bootstrap";
import {Button} from "@material-ui/core";
import style from "../login/login.module.css"

const Forgot = ({showForgot, closeForgot}) => {

    const [passwordValue, setPasswordValue] = useState("")
    const handleChangePassword = (e) => setPasswordValue(e.target.value)

    const [emailValue, setEmailValue] = useState()
    const handleChangeEmail = (e) => setEmailValue(e.target.value)

    const [confirmPasswordValue, setConfirmPasswordValue] = useState("")
    const handleChangeConfirmPassword = (e) => setConfirmPasswordValue(e.target.value)

    const [error, setError] = useState(null)



    useEffect(() => {
        if (passwordValue !== confirmPasswordValue) {
            setError("Пароли не совпадают")
        } else setError(null)
    }, [passwordValue, confirmPasswordValue])

    const handleForgotPassword = () => {
        if (passwordValue.length < 6) {
            setError("Минимальная длина пароля 6 символов")
        }
        else if (!error) {
            alert("OK")
            setConfirmPasswordValue("")
            setPasswordValue("")
            setEmailValue("")

        }
    }


    return (
        <Modal centered={true} show={showForgot} onHide={closeForgot}>
            <form className={style.form}>
                <Modal.Header className={style.loginHeader}>
                    <h3>Восстановить пароль</h3>
                </Modal.Header>
                <div className={style.formWrapper}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email"
                               name="email"
                               value={emailValue}
                               onChange={handleChangeEmail}
                               className={style.input}
                               placeholder="Введите email"/>
                    </div>

                    <div className="form-group">
                        <label>Новый пароль</label>
                        <div>
                            <input value={passwordValue}
                                   type="password"
                                   onChange={handleChangePassword}
                                   className={style.input}
                                   placeholder="Введите пароль"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Потвердите пароль</label>
                        <div>
                            <input type="password"
                                   value={confirmPasswordValue}
                                   onChange={handleChangeConfirmPassword}
                                   className={style.input}
                                   placeholder="Введите пароль"/>
                        </div>
                    </div>
                    {error && <span>{error}</span>}
                    <Button variant="contained"
                            onClick={handleForgotPassword}
                            className={style.button}
                            color="primary">Отправить</Button>
                </div>
            </form>
        </Modal>
    );
};

export default Forgot;
