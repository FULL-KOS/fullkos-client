import React from "react";
import styles from "./MainPage.module.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function AuthButton(props) {
    return (
        <Link to={props.path} className={`${styles.btn} ${styles.block} ${styles.rounded}`}>{props.name}</Link>
    )
    //${styles['btn-gradient']}
}

export default AuthButton;