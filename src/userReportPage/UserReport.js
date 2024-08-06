import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import KomPASS from "../KomPASS.png";
import styles from "./UserReport.module.css";
import ContentHeader from "./ContentHeader";
import Chart from "./Chart";
import InnerContents from "./InnerContents";
import { useEffect } from "react";
import CategoryButton from "./CategoryButton";
import CategoryMove from "./CategotyMove";
import Portfolio from "./Portfolio";

function UserReport() {
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
    <div
      className={styles.userReportDiv}
      style={{ backgroundColor: "#E3EBFF" }}
    >
      <img src={KomPASS} width="25%"></img>
      <Portfolio></Portfolio>
      <CategoryMove></CategoryMove>
    </div>
  );
}

export default UserReport;
