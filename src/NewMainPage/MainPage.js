import styles from "./NewMainPage.module.css";

function MainPage() {
  return (
    <div className={styles.container}>
      <div className={styles["grid-item"]}>carousel</div>
      <div className={styles["grid-item"]}>mainleft</div>
      <div className={styles["grid-item"]}>maincenter</div>
      <div className={styles["grid-item"]}>mainright</div>
      <div className={styles["grid-item"]}>portfolio</div>
    </div>
  );
}

export default MainPage;
