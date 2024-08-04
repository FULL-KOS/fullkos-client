import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
Chart.defaults.font.family = "MALANGMALANG";

function TradingVolume(props) {
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
          display: false,
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

  const makeDataSet = (volumes) => {
    var color = [];

    var dynamicColors = function () {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      return "rgb(" + r + "," + g + "," + b + ")";
    };
    for (var i in volumes) {
      color.push(dynamicColors());
    }

    let newData = {
      labels: volumes.map((row) => row.company_name),
      datasets: [
        {
          type: "bar",
          backgroundColor: color,
          borderRadius: 2,
          data: volumes.map((row) => row.total),
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
    fetch(`http://221.168.36.43/api/trading/volume?industry=${industry}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        saveData(makeDataSet(data.volumes));
      });
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    getData(industry);
  }, [industry]);

  useEffect(() => {}, [data, options]);

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

export default TradingVolume;
