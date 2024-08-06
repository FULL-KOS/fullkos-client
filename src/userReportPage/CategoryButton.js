import React from "react";
import styles from "./UserReport.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function CategoryButton(props) {
  return (
    <Link
      to="/sector"
      className={`${styles.categorybtn} ${
        props.dir === "left" ? styles.left : styles.right
      }`}
    >
      {props.name}
    </Link>
  );
}

export default CategoryButton;
