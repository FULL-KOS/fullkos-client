import React from "react";
import styles from './SummaryTableWidget.module.css';

function SummaryTableWidget() {
    let goodNews = [
        "삼성전자는 2024년 1분기에 매출이 증가하며 성과를 올렸고, 반도체 부문에서의 회복세가 긍정적으로 작용했습니다. 또한, 새로운 스마트폰 모델과 혁신적인 기술 개발로 시장 경쟁력을 강화했습니다. 이러한 성과로 인해 주가 상승과 투자자들의 신뢰도 높아졌습니다.",
        "삼성전자는 2024년 1분기에 매출이 증가하며 성과를 올렸고, 반도체 부문에서의 회복세가 긍정적으로 작용했습니다. 또한, 새로운 스마트폰 모델과 혁신적인 기술 개발로 시장 경쟁력을 강화했습니다. 이러한 성과로 인해 주가 상승과 투자자들의 신뢰도 높아졌습니다.",
        "",
        "",
    ];
    let badNews = [
        "삼성전자는 2024년 1분기에 반도체 부문에서의 수익이 감소하며 손실을 보았고, 스마트폰 부문에서의 판매량 감소로 인해 시장 경쟁력이 약화되었습니다. 이러한 부정적인 성과로 인해 주가 하락과 투자자들의 신뢰도 하락이 예상됩니다.",
        "삼성전자는 2024년 1분기에 반도체 부문에서의 수익이 감소하며 손실을 보았고, 스마트폰 부문에서의 판매량 감소로 인해 시장 경쟁력이 약화되었습니다. 이러한 부정적인 성과로 인해 주가 하락과 투자자들의 신뢰도 하락이 예상됩니다.",
        "",
        "",
    ];

    let bigHandTrend = [
        "삼성전자는 2024년 1분기에 대량 거래자들의 매수세가 강해지며 주가 상승을 이끌었습니다. 이러한 동향은 대량 거래자들의 신뢰가 높아지고, 향후 주가 상승이 예상됩니다.",
        "삼성전자는 2024년 1분기에 대량 거래자들의 매수세가 강해지며 주가 상승을 이끌었습니다. 이러한 동향은 대량 거래자들의 신뢰가 높아지고, 향후 주가 상승이 예상됩니다.",
        "",
        "",
    ];


    return (
        <div style={{padding: '48px 86px', backgroundColor: '#D9D9D9', borderRadius: '18px'}}>
            <div style={{backgroundColor: 'white'}}>
                <table>
                    <thead>
                    <tr className={styles["header-row"]}>
                        <th></th>
                        <th>24년 1분기</th>
                        <th>24년 2분기</th>
                        <th>24년 3분기</th>
                        <th>24년 4분기</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>긍정적인 기사</td>
                        {
                            goodNews.map((news, index) => {
                                return <td key={index}>{news}</td>
                            })
                        }
                    </tr>
                    <tr>
                        <td>부정적인 기사</td>
                        {
                            badNews.map((news, index) => {
                                return <td key={index}>{news}</td>
                            })
                        }
                    </tr>
                    <tr>
                        <td>큰 손 동향</td>
                        {
                            bigHandTrend.map((news, index) => {
                                return <td key={index}>{news}</td>
                            })
                        }
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default SummaryTableWidget;