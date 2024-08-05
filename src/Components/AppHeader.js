import styles from "./AppHeader.module.css";
import kompass from "../KomPASS.png";

function AppHeader() {
  return (
    <div className={styles["app-header"]}>
      <img src={kompass} className={styles.logo} />
    </div>
  );
}

export default AppHeader;
