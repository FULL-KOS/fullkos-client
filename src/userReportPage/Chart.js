import React from "react";
import styles from "./UserReport.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, getElementAtEvent } from "react-chartjs-2"; // 원하는 차트 종류를 가져오세요.
import { useState, useEffect, useRef } from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useNavigate } from "react-router-dom";

export function Chart(props) {
  ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

  const [chartData, setChartData] = useState(props.chartDataList);
  const [chartNameData, setChartNameData] = useState(props.chartNameDataList);
  const [chartInfoDict, setChartInfoDict] = useState(props.chartInfoDict);

  const data = {
    labels: chartNameData,
    datasets: [
      {
        label: "# of Votes",
        data: chartData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "#000000", // color of the label text
        font: {
          size: 20,
        },
        align: "center",
        formatter: function (value, context) {
          // Grab the label for this value
          const label = context.chart.data.labels[context.dataIndex];

          // Format the number with 2 decimal places
          const formattedVal = Intl.NumberFormat("en-US", {
            minimumFractionDigits: 2,
          }).format(value);

          return `${label} (${formattedVal}%)`;
        },
      },
    },
  };

  const navigate = useNavigate();
  const chartRef = useRef();
  const onClick = (event) => {
    const chart = chartRef.current;
    if (!chart) {
      alert("hi");
      return;
    }
    const click_result = getElementAtEvent(chart, event);
    const dataIndex = click_result[0].index;
    const label = chartNameData[click_result[0].index];
    const code = chartInfoDict[label];
    navigate("/stock");
    // alert(code);
  };

  return (
    <Pie
      ref={chartRef}
      data={data}
      options={options}
      onClick={onClick}
      className={styles.chart}
    />
  );
}

export default Chart;
