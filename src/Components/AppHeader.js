import styles from "./AppHeader.module.css";
import kompass from "../KomPASS.png";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function AppHeader() {
  const [tab, setTab] = useState(0);
  const location = useLocation();

  const classNameActive = styles.active;

  useEffect(() => {
    setTab(location.pathname === "/sector" ? 1 : 0);
    console.log(location);
  }, [location]);

  useEffect(() => {
    const home = document.getElementById("home");
    const sector = document.getElementById("sector");
    console.log(classNameActive);
    if (tab == 0) {
      home.classList.add(classNameActive);
      sector.classList.remove(classNameActive);
    } else {
      home.classList.remove(classNameActive);
      sector.classList.add(classNameActive);
    }
  }, [tab]);

  return (
    <div>
      <div className={styles["app-header"]}>
        <div className={styles.item}>
          <img src={kompass} className={styles.logo} />
        </div>
        <div className={styles.item}> </div>
        <div id="home" className={styles.item}>
          홈
        </div>
        <div id="sector" className={styles.item}>
          섹터 별로 보기
        </div>
        <div className={styles.item}> </div>
      </div>
    </div>
  );
}

export default AppHeader;
