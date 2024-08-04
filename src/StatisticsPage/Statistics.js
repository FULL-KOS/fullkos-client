import TradingVolume from "./TradingVolume";
import TradingBuySell from "./TradingBuySell";
import KomPASS from "../KomPASS.png";
import styles from "./Statistics.module.css";
import ContentHeader from "../userReportPage/ContentHeader";
import { useState } from "react";
import "./Tab.css";

function Statistics(props) {
  const [industry, setIndustry] = useState(props.industry);
  const [menu, setMenu] = useState(0);

  const menuList = {
    0: <TradingVolume industry={industry} />,
    1: <TradingBuySell industry={industry} />,
  };

  const menuMap = {
    0: "거래량",
    1: "매수/매도량",
  };

  const changeMenu = (menuIndex) => {
    setMenu(menuIndex);
  };

  return (
    <div className={styles.userReportDiv}>
      <img src={KomPASS} width="25%"></img>
      <div className={styles.contentsBox}>
        <div className={styles.header}>
          <ul className="tabs">
            <li
              className={`${menu === 0 ? "active" : ""}`}
              onClick={() => changeMenu(0)}
            >
              {menuMap[0]}
            </li>
            <li
              className={`${menu === 1 ? "active" : ""}`}
              onClick={() => changeMenu(1)}
            >
              {menuMap[1]}
            </li>
          </ul>
        </div>
        <div className={styles.contents}>
          <ContentHeader
            value={industry + " 종목 " + menuMap[menu] + " 순위"}
          />
          <div className={styles.innerContentsBox}>{menuList[menu]}</div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
