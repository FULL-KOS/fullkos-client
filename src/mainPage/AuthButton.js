import React from "react";
import styles from "./AuthButton.module.css";

function AuthButton(props) {
    return (
        <a href="#" className={`${styles.btn} ${styles.block} ${styles.rounded}`}>{props.name}</a>
    )
    //${styles['btn-gradient']}
}

export default AuthButton;