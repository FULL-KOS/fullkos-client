import styles from "./Carousel.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "./CarouselItem";
import { useEffect } from "react";

function Carousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  var interv;

  const nextBtn = function () {
    if (document.getElementsByClassName("slick-next")[0]) {
      document.getElementsByClassName("slick-next")[0].click();
    }
  };

  useEffect(() => {
    interv = setInterval(nextBtn, 3000);
    return () => {
      clearInterval(interv);
    };
  }, []);

  return (
    <div>
      <div className={styles.titleBox}>최신 내부자 거래 종목</div>
      <br />
      <br />
      <Slider {...settings}>
        <div className={styles.itemBox}>
          <CarouselItem
            img="img/samsung.png"
            name="삼성전자"
            sector="반도체"
            buyer="삼성물산"
            holdings="1,238,767,819"
            amount="15,000"
            worth="1,200,000"
          />
        </div>
        <div className={styles.itemBox}>
          <CarouselItem
            img="img/hdcar.png"
            name="현대자동차"
            sector="자동차"
            buyer="현대모비스"
            holdings="62,792,005"
            amount="5,000"
            worth="1,120,000"
          />
        </div>
        <div className={styles.itemBox}>
          <CarouselItem
            img="img/dk.png"
            name="동국홀딩스"
            sector="소재"
            buyer="국민연금공단"
            holdings="698,322"
            amount="-163,536"
            worth="1,251,050"
          />
        </div>
        <div className={styles.itemBox}>
          <CarouselItem
            img="img/sk.png"
            name="SK하이닉스"
            sector="반도체"
            buyer="TheCapitalGroupCompanies,Inc."
            holdings="35,610,348"
            amount="-818,761"
            worth="127,808,592"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
