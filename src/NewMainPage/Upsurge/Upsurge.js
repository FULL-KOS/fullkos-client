import styles from "./Upsurge.module.css";
import UpsurgeItem from "./UpsurgeItem";

function Upsurge() {
  return (
    <div className={styles.upsurgeBox}>
      <br />
      주요주주의 거래량이 급증한 카테고리
      <ul className={styles.upsurgeList}>
        <UpsurgeItem name="반도체" increase="22" />
        <UpsurgeItem name="소재" increase="18" />
        <UpsurgeItem name="제약" increase="3" />
        <UpsurgeItem name="엔터테인먼트" increase="7" />
      </ul>
    </div>
  );
}

export default Upsurge;
