import React from "react";
import styles from "./UserReport.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CategoryButton from "./CategoryButton";

function CategoryMove(props) {
  return (
    <div className={styles.categoryBox}>
      <br />
      카테고리 이동
      <div className={styles.categoryBox}>
        <CategoryButton name="반도체" dir="left" />
        <CategoryButton name="제약" dir="right" />
        <CategoryButton name="소재" dir="left" />
        <CategoryButton name="건설" dir="right" />
        <CategoryButton name="자본재" dir="left" />
        <CategoryButton name="증권" dir="right" />
      </div>
    </div>
  );
}

export default CategoryMove;
