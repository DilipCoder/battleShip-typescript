import React from 'react';
import styles from './Model.module.css';

const Modal = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;