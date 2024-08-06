import React from "react";
import styles from "./TmpAIReport.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BigHandMonthlyTradeWidget from "./BigHandMonthlyTradeWidget";
import MonthlyBubbleChart from "./MonthlyBubbleChart";

function TmpAIReport(props) {
  return (
    <div className={styles.reportBox}>
      분기별 AI 분석
      <div className={`${styles.reportMainDiv}`}>
        &nbsp; - 2024년 1분기
        <div className={`${styles.reportMainDiv}`}>임원 및 주요주주 동향</div>
        <div className={`${styles.reportMainDiv}`}>기사 요약</div>
      </div>
      <div className={styles.reportInnerBox}>
        <div className={`${styles.reportDiv} ${styles.left}`}>
          <div className={styles.reportInnerDiv}>
            임원 및 주요주주들의 월별 매도/매수 현황
          </div>
          <div className={styles.reportMainDiv}>
            <BigHandMonthlyTradeWidget quarter={1} />
          </div>
        </div>
        <div className={`${styles.reportDiv} ${styles.right}`}>
          <div className={styles.reportInnerDiv}>월별 기사 분석</div>
        </div>
      </div>
      <div className={`${styles.reportMainDiv}`}>
        &nbsp; - 2024년 2분기
        <div className={`${styles.reportMainDiv}`}>임원 및 주요주주 동향</div>
        <div className={`${styles.reportMainDiv}`}>기사 요약</div>
      </div>
      <div className={styles.reportInnerBox}>
        <div className={`${styles.reportDiv} ${styles.left}`}>
          <div className={styles.reportInnerDiv}>
            임원 및 주요주주들의 월별 매도/매수 현황
          </div>
          <div className={styles.reportMainDiv}>
            <BigHandMonthlyTradeWidget quarter={2} />
          </div>
        </div>
        <div className={`${styles.reportDiv} ${styles.right}`}>
          <div className={styles.reportInnerDiv}>월별 기사 분석</div>
        </div>
      </div>
    </div>
  );
}

export default TmpAIReport;
