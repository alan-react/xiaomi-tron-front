import React from 'react';
import {Modal} from "react-bootstrap";
import CartCard from "../cartCard/cartCard";

const Cart = ({closeCart, showCart}) => {
    return (
        <Modal size="xl" centered={false} show={showCart} onHide={closeCart}>
            <div className="row">
                <div className="col-lg-12">
                    <div className="mb-3">
                        <div className="pt-4 wish-list">
                            <h5 className="mb-4 ml-4">Корзина</h5>
                            <CartCard/>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default Cart;
