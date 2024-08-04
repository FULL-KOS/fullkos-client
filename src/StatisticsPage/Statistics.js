import TradingVolume from "./TradingVolume";
import KomPASS from "../KomPASS.png";
import styles from "./Statistics.module.css";
import ContentHeader from "../userReportPage/ContentHeader";
import { useState } from "react";

function Statistics(props) {
  const [industry, setIndustry] = useState(props.industry);

  return (
    <div className={styles.userReportDiv}>
      <img src={KomPASS} width="25%"></img>
      <div className={styles.contentsBox}>
        <div className={styles.header}>
          TODO: Statistics Page 탭 네비게이션 추가
        </div>
        <div className={styles.contents}>
          <ContentHeader value={industry + " 종목 거래량 순위"} />
          <div className={styles.innerContentsBox}>
            <TradingVolume industry={industry} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
