import styles from "./AppHeader.module.css";
import kompass from "../KomPASS.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function AppHeader() {
  const [tab, setTab] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const classNameActive = styles.active;

  useEffect(() => {
    setTab(location.pathname === "/" ? 0 : (location.pathname === "/sector" ? 1 : 2));
  }, [location]);

  useEffect(() => {
    const home = document.getElementById("home");
    const stock = document.getElementById("stock");
    const sector = document.getElementById("sector");
    if (tab == 0) {
      home.classList.remove(classNameActive);
      sector.classList.add(classNameActive);
      stock.classList.add(classNameActive);
    } else {
      if (tab == 1) {
        home.classList.add(classNameActive);
        sector.classList.remove(classNameActive);
        stock.classList.add(classNameActive);
      }
      else {
        home.classList.add(classNameActive);
        sector.classList.add(classNameActive);
        stock.classList.remove(classNameActive);
      }

    }
  }, [tab]);

  const navigateHome = function (e) {
    navigate("/");
  };

  const navigateSector = function (e) {
    navigate("/sector");
  };

  const navigateStock = function (e) {
    navigate("/stock");
  };

  return (
    <div>
      <div className={styles["app-header"]}>
        <div className={styles.item}>
          <img src={kompass} className={styles.logo} onClick={navigateHome} />
        </div>
        <div className={styles.item}> </div>
        <div id="home" className={styles.itemText} onClick={navigateHome}>
          홈
        </div>
        <div id="stock" className={styles.itemText} onClick={navigateStock}>
          종목 별로 보기
        </div>
        <div id="sector" className={styles.itemText} onClick={navigateSector}>
          카테고리 별로 보기
        </div>
        <div className={styles.item}> </div>
      </div>
    </div>
  );
}

export default AppHeader;
