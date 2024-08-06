import React from "react";
import styles from "./TmpAIReport.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BigHandMonthlyTradeWidget from "./BigHandMonthlyTradeWidget";
import MonthlyBubbleChart from "./MonthlyBubbleChart";

function TmpAIReport(props) {
  let goodNews = [
    "삼성전자는 2024년 1분기에 매출이 증가하며 성과를 올렸고, 반도체 부문에서의 회복세가 긍정적으로 작용했습니다. 또한, 새로운 스마트폰 모델과 혁신적인 기술 개발로 시장 경쟁력을 강화했습니다. 이러한 성과로 인해 주가 상승과 투자자들의 신뢰도 높아졌습니다.",
    "삼성전자는 2024년 1분기에 매출이 증가하며 성과를 올렸고, 반도체 부문에서의 회복세가 긍정적으로 작용했습니다. 또한, 새로운 스마트폰 모델과 혁신적인 기술 개발로 시장 경쟁력을 강화했습니다. 이러한 성과로 인해 주가 상승과 투자자들의 신뢰도 높아졌습니다.",
    "",
    "",
  ];
  let badNews = [
    "삼성전자는 2024년 1분기에 반도체 가격 하락과 공급 과잉으로 인해 수익성이 악화되었습니다. 스마트폰 시장에서의 경쟁 심화와 판매 부진도 경영에 부담을 주었습니다. 이러한 문제로 인해 주가가 하락하고, 향후 실적에 대한 우려가 커졌습니다.",
    "삼성전자는 2024년 1분기에 반도체 가격 하락과 공급 과잉으로 인해 수익성이 악화되었습니다. 스마트폰 시장에서의 경쟁 심화와 판매 부진도 경영에 부담을 주었습니다. 이러한 문제로 인해 주가가 하락하고, 향후 실적에 대한 우려가 커졌습니다.",
    "",
    "",
  ];

  let bigHandTrend = [
    "임원들은 주식 매수와 매도에 신중한 태도를 보였습니다. 일부 임원들은 주가 하락을 기회로 삼아 자사 주식을 매수했으나, 다른 임원들은 매도를 통해 자금을 확보하는 모습을 보였습니다.",
    "임원들은 주식 매수와 매도에 신중한 태도를 보였습니다. 일부 임원들은 주가 하락을 기회로 삼아 자사 주식을 매수했으나, 다른 임원들은 매도를 통해 자금을 확보하는 모습을 보였습니다.",
    "",
    "",
  ];

  return (
    <div className={styles.reportBox}>
      분기별 AI 분석
      <div className={`${styles.reportMainDiv}`}>
        &nbsp; - 2024년 1분기
        <div className={`${styles.reportMainDiv}`}>내부자 동향</div>
        <div className={styles.reportBigHandDiv}>{bigHandTrend[0]}</div>
        <div className={`${styles.reportMainDiv}`}>기사 요약</div>
        <div className={styles.reportNewsWrap}>
          <div className={styles.reportNewsSenti}>👍</div>
          <div className={styles.reportNewsDiv}>{goodNews[0]}</div>
        </div>
        <div className={styles.reportNewsWrap}>
          <div className={styles.reportNewsSenti}>👎</div>
          <div className={styles.reportNewsDiv}>{badNews[0]}</div>
        </div>
      </div>
      <div className={styles.reportInnerBox}>
        <div className={`${styles.reportDiv} ${styles.left}`}>
          <div className={styles.reportInnerDiv}>
            내부자들의 월별 매도/매수 현황
          </div>
          <div className={styles.reportInnerDiv}>
            <BigHandMonthlyTradeWidget quarter={1} />
          </div>
        </div>
        <div className={`${styles.reportDiv} ${styles.right}`}>
          <div className={styles.reportInnerDiv}>월별 기사 분석</div>
          <div className={styles.reportInnerDiv}>
            <MonthlyBubbleChart quarter={1} />
          </div>
        </div>
      </div>
      <div className={`${styles.reportMainDiv}`}>
        &nbsp; - 2024년 2분기
        <div className={`${styles.reportMainDiv}`}>내부자 동향</div>
        <div className={styles.reportBigHandDiv}>{bigHandTrend[1]}</div>
        <div className={`${styles.reportMainDiv}`}>기사 요약</div>
        <div className={styles.reportNewsWrap}>
          <div className={styles.reportNewsSenti}>👍</div>
          <div className={styles.reportNewsDiv}>{goodNews[1]}</div>
        </div>
        <div className={styles.reportNewsWrap}>
          <div className={styles.reportNewsSenti}>👎</div>
          <div className={styles.reportNewsDiv}>{badNews[1]}</div>
        </div>
      </div>
      <div className={styles.reportInnerBox}>
        <div className={`${styles.reportDiv} ${styles.left}`}>
          <div className={styles.reportInnerDiv}>
            내부자들의 월별 매도/매수 현황
          </div>
          <div className={styles.reportInnerDiv}>
            <BigHandMonthlyTradeWidget quarter={2} />
          </div>
        </div>
        <div className={`${styles.reportDiv} ${styles.right}`}>
          <div className={styles.reportInnerDiv}>월별 기사 분석</div>
          <div className={styles.reportInnerDiv}>
            <MonthlyBubbleChart quarter={2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TmpAIReport;
