import React from "react";
import styles from "./MainPage.module.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function LoginButton(props) {
    return (
        <a href="#" className={`${styles.btn} ${styles.rounded}`}>{props.name}</a>
    )
    //${styles['btn-gradient']}
}

export default LoginButton;