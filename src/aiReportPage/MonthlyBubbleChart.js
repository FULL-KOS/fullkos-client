import { Bubble } from "react-chartjs-2";
import React, { useEffect, useState } from "react";

function MonthlyBubbleChart(props) {
  class News {
    constructor(title, content, url, sentiment, date) {
      this.title = title;
      this.content = content;
      this.url = url;
      this.sentiment = sentiment;
      this.date = date;
    }
  }

  const [chartData, setChartData] = useState({
    datasets: [
      {
        label: "Positive",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Negative",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  });

  const [quarterList, setQuarterList] = useState(
    props.quarter == 1
      ? [0, 1, 2]
      : props.quarter == 2
      ? [3, 4, 5]
      : props.quarter == 3
      ? [6, 7, 8]
      : props.quarter == 4
      ? [9, 10, 11]
      : []
  );

  useEffect(() => {
    async function fetchData() {
      let response = await fetch("/samsung_news_senti.json");
      let newsJson = await response.json();
      let newsDict = {};

      for (let newsData of Object.entries(newsJson)) {
        let news = new News(
          newsData[1]["title"],
          newsData[1]["content"],
          newsData[1]["url"],
          newsData[1]["sentiment"],
          newsData[1]["date"].split(" ")[0]
        );
        let newsDate = new Date(news.date);
        newsDate.setDate(1);
        let month = newsDate.getMonth();
        if (quarterList.indexOf(month) === -1) {
          continue;
        }

        if (newsDict[newsDate] === undefined) {
          newsDict[newsDate] = {
            x: newsDate,
            positive: 0,
            negative: 0,
            veryPositive: 0,
            veryNegative: 0,
          };
        } else {
          switch (news.sentiment) {
            case "very_positive":
              newsDict[newsDate].veryPositive += 1;
              break;
            case "positive":
              newsDict[newsDate].positive += 1;
              break;
            case "very_negative":
              newsDict[newsDate].veryNegative += 1;
              break;
            case "negative":
              newsDict[newsDate].negative += 1;
              break;
          }
        }
      }
      let positiveDataSet = [];
      let negativeDataSet = [];

      for (let date of Object.keys(newsDict)) {
        let news = newsDict[date];

        if (news.veryPositive > 0) {
          let temp = { x: news.x, y: 2, r: news.veryPositive * 0.4 };
          positiveDataSet.push(temp);
        }
        if (news.positive > 0) {
          let temp = { x: news.x, y: 1, r: news.positive * 0.4 };
          positiveDataSet.push(temp);
        }
        if (news.veryNegative > 0) {
          let temp = { x: news.x, y: -2, r: news.veryNegative * 0.4 };
          negativeDataSet.push(temp);
        }
        if (news.negative > 0) {
          let temp = { x: news.x, y: -1, r: news.negative * 0.4 };
          negativeDataSet.push(temp);
        }
      }

      setChartData({
        ...chartData,
        datasets: [
          {
            label: "Positive",
            data: positiveDataSet,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
          {
            label: "Negative",
            data: negativeDataSet,
            backgroundColor: "rgba(255, 99, 132, 0.6)",
          },
        ],
      });
    }

    fetchData();
  }, []);

  let options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "month",
          displayFormats: {
            month: "MMM yyyy",
          },
        },
        title: {
          display: true,
          text: "Month",
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "감정",
        },
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <div>
        <Bubble data={chartData} options={options} />
      </div>
    </div>
  );
}

export default MonthlyBubbleChart;
