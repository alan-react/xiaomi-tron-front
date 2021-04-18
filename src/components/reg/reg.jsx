import React from 'react';
import {Modal} from "react-bootstrap";

const Reg = ({showReg, closeReg}) => {
    return (
        <>
            <Modal centered={true} show={showReg} onHide={closeReg}>

            </Modal>
        </>
    );
};

export default Reg;
