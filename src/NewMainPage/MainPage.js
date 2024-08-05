import CategoryMove from "../userReportPage/CategotyMove";
import Portfolio from "../userReportPage/Portfolio";
import styles from "./NewMainPage.module.css";
import Upsurge from "./Upsurge/Upsurge";

function MainPage() {
  return (
    <div className={styles.container}>
      <div className={styles["grid-item"]}>carousel</div>
      <div className={styles["grid-item"]}>mainleft</div>
      <div className={styles["grid-item"]}>
        <Upsurge />
      </div>
      <div className={styles["grid-item"]}>
        <CategoryMove />
      </div>
      <div className={styles["grid-item"]}>
        <Portfolio />
      </div>
    </div>
  );
}

export default MainPage;
