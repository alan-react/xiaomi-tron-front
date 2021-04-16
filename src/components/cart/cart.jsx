import React from 'react';
import {Modal} from "react-bootstrap";
import CartCard from "../cartCard/cartCard";
import styles from "./cart.module.css"

const Cart = ({closeCart, showCart}) => {
    return (
        <Modal size="xl" centered={false} show={showCart} onHide={closeCart}>
            <div className="row">
                <div className="col-lg-12">
                    <div className="mb-3">
                        <div className="pt-4 wish-list">
                            <h5 className={styles.cartTitle}>
                                Корзина
                            </h5>
                            <div className={styles.cards}>
                                <CartCard/>
                                <CartCard/>
                                <CartCard/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default Cart;
