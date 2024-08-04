import React from "react";
import styles from "./UserReport.module.css";
import AnalysisButton from "./AanalysisButton";

function InnerContents(props) {
    return (
        <text className={styles.innerContents}>
            {props.valueTitle}
            <br/>
            {props.value}
            <br/>
            <AnalysisButton name={props.buttonValue}/>
            <br/>
            <br/>
        </text>
    )
}

export default InnerContents;