import styles from "./Carousel.module.css";

function CarouselItem(props) {
  return (
    <div className={styles.item}>
      <div className={styles.part}>
        <img src={props.img} />
        {props.name}
      </div>
      <div className={styles.part}>
        <div>거래자 : {props.buyer}</div>
        <div>보유 주식 수: {props.holdings}</div>
      </div>
      <div className={styles.part}>
        <div
          className={props.amount.charAt(0) === "-" ? styles.sell : styles.buy}
        >
          거래량 : {props.amount}
        </div>
        <div>거래액수 : {props.worth}천원</div>
      </div>
    </div>
  );
}

export default CarouselItem;
