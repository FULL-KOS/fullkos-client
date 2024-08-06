import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import KomPASS from "../KomPASS.png";
import styles from "./UserReport.module.css";
import ContentHeader from "./ContentHeader";
import Chart from "./Chart";
import InnerContents from "./InnerContents";
import { useEffect } from "react";

function Portfolio(props) {
  const order = ["첫", "두", "세"];
  const [username, setUsername] = useState("");
  const [industryList, setIndustryList] = useState([]);
  const tmpNameList = [];
  const tmpVoteList = [];
  const tmpChartDict = [];
  let notLoginCheck = sessionStorage.getItem("email");

  useEffect(() => {
    // Mockdata는 POST 방식 불가
    if (notLoginCheck === null) {
      fetch("/mockData/Joohee/userInfoData.json", {
        method: "GET",
        // headers: {
        //     Accept: "application/json",
        //     'Content-Type': 'application/json;charset=utf-8',
        // },
        // body: JSON.stringify({
        //     email: sessionStorage.getItem("email"),
        //     dummy: "1234"
        // })
      })
        .then((response) => response.json())
        .then((data) => {
          setUsername(data.username);
          setIndustryList(data.industryList);
          tmpNameList.length = 0;
          tmpVoteList.length = 0;

          data.portfolio &&
            data.portfolio.map((portfilioElement) => {
              tmpNameList.push(portfilioElement.company_name);
              tmpVoteList.push(
                (portfilioElement.amount / data.allAmount) * 100
              );
              // 급해서 걍 이렇게 할게유,,
              tmpChartDict[portfilioElement.company_name] =
                portfilioElement.company_code;
            });
        });
      return;
    }
    fetch("http://221.168.36.43/api/userReport", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: sessionStorage.getItem("email"),
        dummy: "1234",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsername(data.username);
        setIndustryList(data.industryList);
        tmpNameList.length = 0;
        tmpVoteList.length = 0;

        data.portfolio &&
          data.portfolio.map((portfilioElement) => {
            tmpNameList.push(portfilioElement.company_name);
            tmpVoteList.push((portfilioElement.amount / data.allAmount) * 100);
            // 급해서 걍 이렇게 할게유,,
            tmpChartDict[portfilioElement.company_name] =
              portfilioElement.company_code;
          });
      });
  }, []);

  return (
    <div className={styles.contentsBox}>
      <div>
        <div className={styles.header}>{username} 님의 포트폴리오</div>
        <div className={`${styles.contents} ${styles.left}`}>
          <Chart
            id="pieChart"
            chartDataList={tmpVoteList}
            chartNameDataList={tmpNameList}
            chartInfoDict={tmpChartDict}
          />
        </div>
        <div className={`${styles.contents} ${styles.right}`}>
          <div className={styles.innerContentsBox}>
            <h3 className={styles.innerContentsTitle}>
              {username} 님의 관심 업종 TOP3
            </h3>
            {industryList &&
              industryList.map((industyElement, index) => (
                <InnerContents
                  valueTitle={`${index + 1}. ${industyElement.industry}`}
                  value={`${
                    industyElement.industry
                  } 업종은 ${username} 님의 소유 주식 중 ${industyElement.pie.toFixed(
                    2
                  )}%로, ${order[index]} 번째로 많은 비중을 차지하고 있습니다.`}
                  buttonValue={`${industyElement.industry} TOP10 종목 분석 바로가기`}
                />
              ))}
          </div>
        </div>
      </div>
      <div
        className={styles.hide}
        style={{ display: notLoginCheck === null ? "block" : "none" }}
      >
        <div to="#" className={`${styles.hideInnerBox} ${styles.btn}`}>
          로그인하고 포트폴리오 분석하기
          <br />
          <Link to="/login" className={`${styles.btn}`}>
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
