import { Bar } from "react-chartjs-2";
import styles from "./Volume.module.css";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useEffect } from "react";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ChartDataLabels
);

function Volume() {
  var dynamicColors = function () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  let data = {
    labels: [
      "삼성전자",
      "현대자동차",
      "동서D&S",
      "SK하이닉스",
      "한미반도체",
      "신라",
      "제우스",
    ],
    datasets: [
      {
        type: "bar",
        backgroundColor: [
          dynamicColors(),
          dynamicColors(),
          dynamicColors(),
          dynamicColors(),
          dynamicColors(),
          dynamicColors(),
          dynamicColors(),
        ],
        borderRadius: 2,
        data: [1400000, 1220008, 1000010, 959000, 650000, 240000, 123000],
        datalabels: {
          align: "end",
          anchor: "end",
        },
      },
    ],
  };

  const options = {
    indexAxis: "y",
    scales: {
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
      tooltip: {
        boxWidth: 100,
      },
      datalabels: {
        formatter: function (value, context) {
          // var idx = context.dataIndex;

          return value;
        },
        font: {
          size: 15,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
    },
  };

  return (
    <div className={styles.volumeBox}>
      <br />
      최근 7일간 내부자 거래량 순위
      <div className={styles.chart}>
        <Bar
          type="bar"
          data={data}
          options={options}
          plugins={ChartDataLabels}
        />
      </div>
    </div>
  );
}

export default Volume;
