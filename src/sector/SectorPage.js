import WhiteBox from "./whiteBox/WhiteBox";
import NewHeader from "./NewHeader";
import styles from "./SectorPage.module.css";
import HeightBox from "./HeightBox";
import NewsBox from "./NewsBox";
import {Bar, Doughnut} from "react-chartjs-2";

function getStockRow({name, currentPrice, color, stockChange}) {
    return <div style={{
        color: "black",
        display: "flex",
        flexDirection: "row",
    }}>
        <div style={{
            flex: 1,
            textAlign: "left",
        }}>
            삼성전자
        </div>
        <div style={{
            flex: 1,
            color: "#4E5968",
        }}>
            {currentPrice}
        </div>
        <div style={{
            flex: 1,
            textAlign: "right",
            color: parseInt(stockChange) < 0 ? "#DE5257" : "#2272EB",
        }}>
            {stockChange}
        </div>
    </div>;
}

function SectorPage() {


    let news = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]

    const DonutChart = () => {
        // Data for the chart
        const data = {
            labels: ['삼성전자', 'sk하이닉스', '한미반도체', 'SK스퀘어', '제우스'],
            datasets: [
                {
                    data: [300, 50, 100, 80, 120], // Example values
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#4BC0C0',
                        '#9966FF'
                    ],
                    borderColor: '#FFFFFF', // Border color
                    borderWidth: 2, // Border width
                },
            ],
        };

        const options = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: (tooltipItem) => {
                            return `${tooltipItem.label}: ${tooltipItem.raw}`;
                        },
                    },
                },
            },
        };

        return (
            <div style={{width: '50%', margin: 'auto'}}>
                <h2 style={{textAlign: 'center'}}>시가 총액 기준 순위</h2>
                <Doughnut data={data} options={options}/>
            </div>
        );
    };

    const BarChart = () => {
        // Define the data for the chart
        const buyDataChart = {
            labels: ['삼성전자', 'SK하이닉스', '한미반도체', 'SK스퀘어', '제우스'],
            datasets: [
                {
                    label: '매수량',
                    data: [80000, 50000, 30000, 60000, 70000], // Example data
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        // 'rgba(54, 162, 235, 0.6)',
                        // 'rgba(255, 206, 86, 0.6)',
                        // 'rgba(75, 192, 192, 0.6)',
                        // 'rgba(153, 102, 255, 0.6)',
                    ],
                    // borderColor: [
                    //     'rgba(255, 99, 132, 1)',
                    //     'rgba(54, 162, 235, 1)',
                    //     'rgba(255, 206, 86, 1)',
                    //     'rgba(75, 192, 192, 1)',
                    //     'rgba(153, 102, 255, 1)',
                    // ],
                    borderWidth: 1,
                },
            ],
        };

        const options = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: '주식 차트',
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                },
                y: {
                    grid: {
                        display: false,
                    },
                    beginAtZero: true,
                },
            },
        };
        return (
            <div style={{width: '500px'}}>
                <Bar data={buyDataChart} options={options}/>
            </div>
        );
    }

    function getCategoryRow({name, value, color}) {
        return <div style={{
            color: "black",
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
        }}>
            <div style={{
                color: "#4E5968",
            }}>
                {name}
            </div>
            <div style={{
                color: color ? color : "black",
            }}>
                {value}
            </div>
        </div>;
    }

    let CategorySpecific = <WhiteBox width={"299px"} height={"300px"}>
        <div style={{
            color: "black",
            display: "flex",
            fontWeight: "bold",
        }}>
            카테고리 상세 정보
        </div>
        <HeightBox height={14}/>
        {getCategoryRow({name: "전일 대비 등락", value: "10 %", color: "#DE5257"})}
        <HeightBox height={8}/>
        {getCategoryRow({name: "전일 대비 상승", value: "120"})}
        <HeightBox height={8}/>
        {getCategoryRow({name: "전일 대비 하락", value: "3"})}
        <HeightBox height={8}/>
        {getCategoryRow({name: "전일 대비 보합", value: "3"})}
        <HeightBox height={14}/>
        <div style={{
            color: "black",
            display: "flex",
            fontWeight: "bold",
        }}>
            투자자 정보
        </div>
        <HeightBox height={14}/>
        {getCategoryRow({name: "개인 :", value: "1조 6,963억원", color: "#DE5257"})}
        <HeightBox height={8}/>
        {getCategoryRow({name: "외국인 :", value: "1조 6,963억원", color: "#2272EB"})}
        <HeightBox height={8}/>
        {getCategoryRow({name: "기관 :", value: "1조 6,963억원", color: "#2272EB"})}
    </WhiteBox>;

    let RelatedStocks = <WhiteBox width={"299px"} height={"100%"}>
        <div style={{
            color: "black",
            display: "flex",
            fontWeight: "bold",
        }}>
            관련 주식
        </div>
        <HeightBox height={"16px"}/>
        <div style={{
            color: "black",
            display: "flex",
            flexDirection: "row",
        }}>
            <div style={{
                flex: 1,
                textAlign: "left",
                color: "#4E5968",
            }}>
                주식
            </div>
            <div style={{
                flex: 1,
                color: "#4E5968",
            }}>
                현재가
            </div>
            <div style={{
                flex: 1,
                textAlign: "right",
                color: "#4E5968",
            }}>
                어제보다
            </div>
        </div>
        <HeightBox height={"16px"}/>
        {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,].map((_, index) => {
            return <div>
                {getStockRow({name: "삼성전자", currentPrice: "80,000", color: "#DE5257", stockChange: "-1,000"})}
                <HeightBox height={"16px"}/>
            </div>
        })}
        {getStockRow({name: "삼성전자", currentPrice: "80,000", color: "#DE5257", stockChange: "-1,000"})}
        <HeightBox height={"16px"}/>
    </WhiteBox>;

    return (
        <div style={{
            flexDirection: "column",
            display: "flex",
            height: "100vh",
            overflowY: "hidden",
            backgroundColor: "#F6F7F9",
        }}>
            <NewHeader/>
            <HeightBox height={"32px"}/>
            <div style={{
                display: "flex",
                overflowY: "hidden",
                flexDirection: "row",
            }}>
                <WhiteBox width={281}>
                    <div style={{
                        color: "black",
                        display: "flex",
                    }}>
                        주요 뉴스
                    </div>
                    <HeightBox height={14}/>
                    {news.map((news, index) => {
                        return <div>
                            <NewsBox key={index}/>
                            <HeightBox height={"16px"}/>
                        </div>
                    })}
                </WhiteBox>
                <div style={{
                    width: "36px",
                }}>
                </div>
                <div style={{
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}>
                    {CategorySpecific}
                    <HeightBox height={"16px"}/>
                    {RelatedStocks}
                </div>
                <div style={{
                    width: "36px",
                }}>
                </div>
                <div style={{
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}>
                    <div style={{
                        color: "black",
                        display: "flex",
                        flexDirection: "row",
                        minHeight: "300px",
                    }}>
                        <WhiteBox>
                            <BarChart></BarChart>
                        </WhiteBox>
                        <div style={{
                            width: "36px",
                        }}>
                        </div>
                        <WhiteBox>
                            <BarChart></BarChart>
                        </WhiteBox>
                    </div>
                    <HeightBox height={"16px"}/>
                    <WhiteBox width={"100%"} height={"100%"}>
                        <DonutChart/>
                    </WhiteBox>
                </div>
            </div>
            <HeightBox height={"32px"}/>
        </div>);
}

export default SectorPage;
