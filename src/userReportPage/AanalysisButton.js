import React from "react";
import styles from "./UserReport.module.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function AnalysisButton(props) {
    return (
        <Link to="#" className={styles.btn}>{props.name}</Link>
    )
}

export default AnalysisButton;