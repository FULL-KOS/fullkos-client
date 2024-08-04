import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import KomPASS from '../KomPASS.png';
import styles from './UserReport.module.css';
import ContentHeader from './ContentHeader';
import Chart from './Chart';
import InnerContents from './InnerContents';
import { useEffect } from 'react';

function UserReport() {
    // const { industyList, industyValue } = this.state;
    const order = ["첫", "두", "세"];
    const [username, setUsername] = useState('');
    const [industryList, setIndustryList] = useState([]);
    const tmpNameList = [];
    const tmpVoteList = [];
    const tmpChartDict = [];

    useEffect(() => {
        // Mockdata는 POST 방식 불가
        fetch('/mockData/Joohee/userInfoData.json', {
            method: 'GET',
            // headers: {
            //   Accept: "application / json",
            //   'Content-Type': 'application/json;charset=utf-8',
            // },
            // body: JSON.stringify({
            //   id: idValue,
            //   password: pwValue,
            // })
        })
        .then(response => response.json())
        .then(data => {
            setUsername(data.username);
            setIndustryList(data.industryList);
            tmpNameList.length = 0;
            tmpVoteList.length = 0;
            
            data.portfolio && data.portfolio.map((portfilioElement) => {
                tmpNameList.push(portfilioElement.company_name);
                tmpVoteList.push(portfilioElement.amount);
                // 급해서 걍 이렇게 할게유,,
                tmpChartDict[portfilioElement.company_name] = portfilioElement.company_code;
            });
        });
    }, []);

    return (
        <div className={styles.userReportDiv}>
            <img src={KomPASS} width='25%'></img>
            <div className={styles.contentsBox}>
                <div className={styles.header}>
                    {username} 님의 투자 분석 레포트
                </div>
                <div className={styles.contents}>
                    <ContentHeader value="보유 주식 분석 결과"/>
                    <Chart id="pieChart" chartDataList={tmpVoteList} chartNameDataList={tmpNameList} chartInfoDict={tmpChartDict}/>
                </div>
                <div className={styles.contents}>
                    <ContentHeader value="관심 업종 분석 결과"/>
                    <div className={styles.innerContentsBox}>
                        <h3 className={styles.innerContentsTitle}>{username} 님의 관심 업종 TOP3</h3>
                        {industryList && industryList.map((industyElement, index) => (
                            <InnerContents valueTitle={`${index+1}. ${industyElement.industry}`} value={`${industyElement.industry} 업종은 ${username} 님의 소유 주식 중 ${industyElement.pie}%로, ${order[index]} 번째로 많은 비중을 차지하고 있습니다.`} buttonValue={`${industyElement.industry} TOP10 종목 분석 바로가기`}/>
                        ))}                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserReport;