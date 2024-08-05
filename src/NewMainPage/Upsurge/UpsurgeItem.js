import styles from "./Upsurge.module.css";

function UpsurgeItem(props) {
  return (
    <li className={styles.upsurgeItem}>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.increase}>+{props.increase}%</div>
    </li>
  );
}

export default UpsurgeItem;
