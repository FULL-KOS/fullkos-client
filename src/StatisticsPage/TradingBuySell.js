import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js";
import styles from "./Statistics.module.css";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ChartDataLabels
);

function TradingBuySell(props) {
  const [industry, setIndustry] = useState(props.industry);
  const [data, setData] = useState({ labels: [], datasets: [] });
  const [options, setOptions] = useState({});

  const saveData = (data) => {
    setData(data);
  };

  const saveOptions = (options) => {
    setOptions(options);
  };

  const init = () => {
    saveData({ labels: [], datasets: [] });
    saveOptions({
      indexAxis: "y",
      plugins: {
        legend: {
          display: true,
          position: "right",
        },
        datalabels: {
          display: false,
        },
        tooltip: {
          boxWidth: 15,
        },
        datalabels: {
          formatter: function (value, context) {
            // var idx = context.dataIndex;

            return value;
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 2000,
      },
    });
  };

  const makeDataSet = (buysells) => {
    let newData = {
      labels: buysells.map((row) => row.company_name),
      datasets: [
        {
          type: "bar",
          label: "매수량",
          backgroundColor: "#F62C2C",
          borderColor: "#F62C2C",
          borderRadius: 2,
          data: buysells.map((row) => row.buy_total),
          datalabels: {
            align: "end",
            anchor: "end",
          },
        },
        {
          type: "bar",
          label: "매도량",
          backgroundColor: "#6FC4F6",
          borderColor: "#6FC4F6",
          borderRadius: 2,
          data: buysells.map((row) => row.sell_total),
          datalabels: {
            align: "end",
            anchor: "end",
          },
        },
      ],
    };

    return newData;
  };

  const getData = (industry) => {
    fetch(`http://221.168.36.43/api/trading/buysell?industry=${industry}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        saveData(makeDataSet(data.buySells));
      });
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    getData(industry);
  }, [industry]);

  useEffect(() => {
    console.log(data);
  }, [data, options]);

  return (
    <div className={styles.chart}>
      <Line
        type="line"
        data={data}
        options={options}
        plugins={ChartDataLabels}
      />
    </div>
  );
}

export default TradingBuySell;
