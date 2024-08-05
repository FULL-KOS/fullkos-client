import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bar, Line } from "react-chartjs-2";
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
Chart.defaults.font.family = "MALANGMALANG";

function TradingBuySell(props) {
  const [industry, setIndustry] = useState(props.industry);
  const [data, setData] = useState({ labels: [], datasets: [] });
  const [options, setOptions] = useState({});
  const [companyIds, setCompanyIds] = useState([]);
  const navigate = useNavigate();

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
      scales: {
        y: {
          grid: {
            display: false,
          },
        },
      },
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
      onClick: (e) => {
        const chart = e.chart;
        const res = chart.getElementsAtEventForMode(
          e,
          "nearest",
          { intersect: true },
          true
        );
        if (res.length === 0) {
          return;
        }
        navigate("/stockDetail", { companyId: companyIds[res[0].index] });
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
        setCompanyIds(data.buySells.map((row) => row.company_id));
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
      <Bar type="bar" data={data} options={options} plugins={ChartDataLabels} />
    </div>
  );
}

export default TradingBuySell;
