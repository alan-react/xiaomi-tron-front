import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import styles from "./alert.module.css"
import {connect} from "react-redux";
import {closeAlert} from "../../redux/reducers/mainReducer";


const Alert = ({show, message, title, closeAlert}) => {

    return (
        <AnimatePresence>
            {show && <motion.div initial={{opacity: 0.5, x: 200}}
                         animate={{opacity: 1, x: 0}}
                         className={styles.container}
                         exit={{opacity: 0}}>

                <div className='alert-content'>
                    <div className='alert-title'>{title}</div>
                    <div className='alert-text'>
                        {message}
                    </div>
                </div>
                <span>
              <img
                  onClick={closeAlert}
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/1200px-OOjs_UI_icon_close.svg.png'
                  alt='close button'
              />
            </span>
            </motion.div>
            }
        </AnimatePresence>
    );
};

const mapStateToProps = (state) => ({
    show: state.main.alert.show,
    message: state.main.alert.message,
    title: state.main.alert.title
})

export default connect(mapStateToProps, {closeAlert})(Alert)
