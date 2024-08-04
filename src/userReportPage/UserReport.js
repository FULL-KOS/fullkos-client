import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import KomPASS from '../KomPASS.png';
import styles from './UserReport.module.css';
import ContentHeader from './ContentHeader';
import Chart from './Chart';

function UserReport() {
    return (
        <div className={styles.userReportDiv}>
            <img src={KomPASS} width='25%'></img>
            <div className={styles.contentsBox}>
                <div className={styles.header}>
                    홍길동 님의 투자 분석 레포트
                </div>
                <div className={styles.contents}>
                    <ContentHeader>
                        보유 주식 분석 결과
                    </ContentHeader>
                    {/* <Chart/> */}
                </div>
            </div>
        </div>
    )
}

export default UserReport;