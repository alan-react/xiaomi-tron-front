import React, {useState} from 'react';
import style from "./login.module.css"
import {Modal} from "react-bootstrap";

const Login = ({showLogin, closeLogin}) => {


    return (
        <>
            <Modal centered={true} show={showLogin} onHide={closeLogin}>
            <form className={style.form}>
                <Modal.Header>
                    <h3>Sign In</h3>
                </Modal.Header>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </Modal>
        </>
    );
};

export default Login;
