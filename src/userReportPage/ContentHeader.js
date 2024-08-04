import React from "react";
import styles from "./UserReport.module.css";

function ContentHeader(props) {
    return (
        <div className={`${styles.userReport} ${styles.contentHeader}`}/>
    )
}

export default ContentHeader;