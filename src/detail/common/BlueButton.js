import React from 'react';
import styles from './BlueButton.module.css';

const BlueButton = ({content}) => {
    return (
        <button className={styles['button']}>{content}</button>
    );
};


export default BlueButton;