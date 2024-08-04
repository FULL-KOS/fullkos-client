import React from "react";
import styles from "./MainPage.module.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function LoginButton(props) {
    return (
        <button onClick={props.onClick} className={`${styles.btn} ${styles.rounded}`}>{props.name}</button>
    )
    //${styles['btn-gradient']}
}

export default LoginButton;