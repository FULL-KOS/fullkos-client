import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import KomPASS from '../KomPASS.png';
import styles from './UserReport.module.css';
import ContentHeader from './ContentHeader';
import Chart from './Chart';
import InnerContents from './InnerContents';
import { useEffect } from 'react';
import CategoryButton from './CategoryButton';

function Category() {
    return (
        // <div className={styles.userReportDiv} style={{backgroundColor: "#E3EBFF"}}>
        //     <img src={KomPASS} width='25%'></img>
            <div className={styles.categoryBox}>
                <br/>
                카테고리 이동
                <div className={styles.categoryBox}>
                    <CategoryButton name="반도체" dir="left"/>
                    <CategoryButton name="제약" dir="right"/>
                    <CategoryButton name="소재" dir="left"/>
                    <CategoryButton name="건설" dir="right"/>
                    <CategoryButton name="자본재" dir="left"/>
                    <CategoryButton name="증권" dir="right"/>
                </div>
            </div>
        // </div>
    )
}

export default Category;