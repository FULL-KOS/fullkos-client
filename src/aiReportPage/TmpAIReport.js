import React from "react";
import styles from "./TmpAIReport.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BigHandMonthlyTradeWidget from "./BigHandMonthlyTradeWidget";
import MonthlyBubbleChart from "./MonthlyBubbleChart";

function TmpAIReport(props) {
  let goodNews = [
    "삼성전자는 2024년 1분기에 매출이 증가하며 성과를 올렸고, 반도체 부문에서의 회복세가 긍정적으로 작용했습니다. 또한, 새로운 스마트폰 모델과 혁신적인 기술 개발로 시장 경쟁력을 강화했습니다. 이러한 성과로 인해 주가 상승과 투자자들의 신뢰도 높아졌습니다.",
    "삼성전자는 2024년 1분기에 매출이 증가하며 성과를 올렸고, 반도체 부문에서의 회복세가 긍정적으로 작용했습니다. 또한, 새로운 스마트폰 모델과 혁신적인 기술 개발로 시장 경쟁력을 강화했습니다. 이러한 성과로 인해 주가 상승과 투자자들의 신뢰도 높아졌습니다.",
    "",
    "",
  ];
  let badNews = [
    "삼성전자는 2024년 1분기에 반도체 가격 하락과 공급 과잉으로 인해 수익성이 악화되었습니다. 스마트폰 시장에서의 경쟁 심화와 판매 부진도 경영에 부담을 주었습니다. 이러한 문제로 인해 주가가 하락하고, 향후 실적에 대한 우려가 커졌습니다.",
    "삼성전자는 2024년 1분기에 반도체 가격 하락과 공급 과잉으로 인해 수익성이 악화되었습니다. 스마트폰 시장에서의 경쟁 심화와 판매 부진도 경영에 부담을 주었습니다. 이러한 문제로 인해 주가가 하락하고, 향후 실적에 대한 우려가 커졌습니다.",
    "",
    "",
  ];

  let bigHandTrend = [
      `
     2024년 1분기 내부자 거래 분석 결과, 해당 기업(company_id: 100653)의 내부자들은 전반적으로 매수 경향을 보이고 있습니다. 총 15건의 거래 중 14건이 매수였으며, 단 1건만이 매도로 나타났습니다.
거래 규모 면에서는 소규모부터 대규모까지 다양한 양상을 보였습니다. 가장 큰 규모의 매수는 3월 22일에 이루어진 13,677주였으며, 그 다음으로는 3월 13일의 10,000주 매수가 눈에 띕니다. 이는 일부 내부자들이 해당 기업의 주식에 대해 상당한 신뢰를 보이고 있음을 시사할 수 있습니다.
거래 빈도 측면에서는 3월에 집중적으로 거래가 이루어졌습니다. 특히 3월 중순부터 말까지 거래가 활발했으며, 이 기간 동안 총 9건의 거래가 발생했습니다. 이는 해당 시기에 기업 내부에서 중요한 변화나 전망이 있었을 가능성을 제시합니다.
주목할 만한 점은 한 주요 내부자가 3월 15일부터 27일 사이에 4차례에 걸쳐 총 15,832주를 매수한 것입니다. 이러한 지속적이고 대규모의 매수는 해당 내부자가 기업의 미래 전망에 대해 긍정적인 견해를 가지고 있음을 암시할 수 있습니다.
유일한 매도 거래는 3월 27일에 147주로 비교적 소규모로 이루어졌습니다. 이는 전체적인 매수 추세에 큰 영향을 미치지 않는 수준으로 보입니다.
종합적으로, 1분기 동안의 내부자 거래 동향은 대체로 긍정적인 신호를 보내고 있습니다. 다수의 내부자들이 꾸준히 매수에 참여하고 있으며, 특히 3월 들어 거래가 활발해진 점은 기업의 단기적 전망이 긍정적일 수 있음을 시사합니다. 그러나 투자자들은 이러한 내부자 거래 정보를 참고하되, 다른 재무 지표와 시장 상황 등을 종합적으로 고려하여 투자 결정을 내려야 할 것입니다. 
      `,
    "",
    "",
  ];

  return (
    <div className={styles.reportBox}>
      분기별 AI 분석
      <div className={`${styles.reportMainDiv}`}>
        &nbsp; - 2024년 1분기
        <div className={`${styles.reportMainDiv}`}>내부자 동향</div>
        <div className={styles.reportBigHandDiv}>
          <p>2024년 1분기 내부자 거래 분석 결과, 해당 기업의 내부자들은 전반적으로 매수 경향을 보이고 있습니다. 총 15건의 거래 중 14건이 매수였으며, 단 1건만이 매도로 나타났습니다.</p>
          <p>거래 규모 면에서는 소규모부터 대규모까지 다양한 양상을 보였습니다. 가장 큰 규모의 매수는 3월 22일에 이루어진 13,677주였으며, 그 다음으로는 3월 13일의 10,000주 매수가 눈에 띕니다. 이는 일부 내부자들이 해당 기업의 주식에 대해 상당한 신뢰를 보이고 있음을 시사할 수 있습니다.</p>
          <p>거래 빈도 측면에서는 3월에 집중적으로 거래가 이루어졌습니다. 특히 3월 중순부터 말까지 거래가 활발했으며, 이 기간 동안 총 9건의 거래가 발생했습니다. 이는 해당 시기에 기업 내부에서 중요한 변화나 전망이 있었을 가능성을 제시합니다.</p>
          <p>주목할 만한 점은 한 주요 내부자가 3월 15일부터 27일 사이에 4차례에 걸쳐 총 15,832주를 매수한 것입니다. 이러한 지속적이고 대규모의 매수는 해당 내부자가 기업의 미래 전망에 대해 긍정적인 견해를 가지고 있음을 암시할 수 있습니다.</p>
          <p>유일한 매도 거래는 3월 27일에 147주로 비교적 소규모로 이루어졌습니다. 이는 전체적인 매수 추세에 큰 영향을 미치지 않는 수준으로 보입니다.</p>
          <p>종합적으로, 1분기 동안의 내부자 거래 동향은 대체로 긍정적인 신호를 보내고 있습니다. 다수의 내부자들이 꾸준히 매수에 참여하고 있으며, 특히 3월 들어 거래가 활발해진 점은 기업의 단기적 전망이 긍정적일 수 있음을 시사합니다. 그러나 투자자들은 이러한 내부자 거래 정보를 참고하되, 다른 재무 지표와 시장 상황 등을 종합적으로 고려하여 투자 결정을 내려야 할 것입니다.</p>
        </div>
        <div className={`${styles.reportMainDiv}`}>기사 요약</div>
        <div className={styles.reportNewsWrap}>
          <div className={styles.reportNewsSenti}>👍</div>
          <div className={styles.reportNewsDiv}>
            삼성전자는 2024년 1분기 플래그십 스마트폰 갤럭시 S24의 판매 호조와 메모리 시황 개선으로 매출이 전분기 대비 6% 증가한 71.92조원을 기록했습니다. 영업이익도 전분기 대비 3.78조원 증가한 6.61조원을 기록하며 IT 시황 회복과 고부가 메모리 제품 수요 대응으로 흑자 전환에 성공했습니다. 또한, 미래 성장을 위한 연구개발 투자도 지속하여 분기 최대 7.82조원의 연구개발비를 기록했습니다.</div>
        </div>
        <div className={styles.reportNewsWrap}>
          <div className={styles.reportNewsSenti}>👎</div>
          <div className={styles.reportNewsDiv}>
            삼성전자는 시스템LSI 부문에서 부품 가격 압박 등의 영향으로 스마트폰 제품별 스펙 조정이 예상되며, 파운드리 시장 성장도 제한적일 것으로 전망됩니다. 또한, 일부 사업 부문에서는 비용 효율화 필요성이 제기되며, 시장 변화에 따른 유기적인 부품 믹스 조정이 필요할 것으로 보입니다.
          </div>
        </div>
      </div>
      <div className={styles.reportInnerBox}>
        <div className={`${styles.reportDiv} ${styles.left}`}>
          <div className={styles.reportInnerDiv}>
            내부자들의 월별 매도/매수 현황
          </div>
          <div className={styles.reportInnerDiv}>
            <BigHandMonthlyTradeWidget quarter={1} />
          </div>
        </div>
        <div className={`${styles.reportDiv} ${styles.right}`}>
          <div className={styles.reportInnerDiv}>월별 기사 분석</div>
          <div className={styles.reportInnerDiv}>
            <MonthlyBubbleChart quarter={1} />
          </div>
        </div>
      </div>
      <div className={`${styles.reportMainDiv}`}>
        &nbsp; - 2024년 2분기
        <div className={`${styles.reportMainDiv}`}>내부자 동향</div>
        <div className={styles.reportBigHandDiv}>
          <p>2024년 2분기(4월-6월) 동안 해당 기업의 내부자 거래 동향을 분석한 결과, 전반적으로 매수 우위의 강한 추세가 관찰되었습니다.</p>
          <p>4월 초에는 소규모의 매도가 있었으나, 이는 전체 거래량에 비해 미미한 수준이었습니다. 4월 중순부터 6월 말까지 대부분의 거래가 매수로 이루어졌으며, 특히 6월에 들어서면서 매수 거래의 규모와 빈도가 크게 증가했습니다.</p>
          <p>주목할 만한 점은 6월 19일에 집중적인 매수가 이루어졌다는 것입니다. 이날 하루에만 10명 이상의 내부자들이 매수에 참여했으며, 그 중 한 주요 내부자는 12,000주라는 상당한 규모의 매수를 진행했습니다. 이는 해당 기업에 대한 내부자들의 강한 신뢰를 시사할 수 있습니다.</p>
          <p>또한, 6월 20일에는 또 다른 대규모 매수가 있었는데, 한 내부자가 10,000주를 매수했습니다. 이러한 대규모 매수는 기업의 미래 전망에 대한 긍정적인 시각을 반영할 수 있습니다.</p>
          <p>전체적으로 2분기 동안 매도 거래는 극히 적었으며(4건), 대부분의 거래(33건)가 매수로 이루어졌습니다. 거래 규모도 매수가 압도적으로 컸으며, 특히 6월에 집중되는 경향을 보였습니다.</p>
          <p>이러한 내부자 거래 패턴은 해당 기업의 주가가 현재 저평가되어 있다고 내부자들이 판단하고 있을 가능성을 시사합니다. 또한, 가까운 미래에 긍정적인 실적이나 중요한 사업 계획이 있을 수 있음을 암시할 수도 있습니다.</p>
          <p>그러나 투자자들은 이러한 내부자 거래 동향이 항상 미래 주가 움직임을 정확히 예측하는 것은 아니라는 점을 유의해야 합니다. 내부자 거래는 투자 결정을 위한 여러 지표 중 하나로 고려되어야 하며, 기업의 재무상태, 시장 환경, 산업 동향 등 다른 요소들과 함께 종합적으로 분석되어야 합니다. </p>
        </div>
        <div className={`${styles.reportMainDiv}`}>기사 요약</div>
        <div className={styles.reportNewsWrap}>
          <div className={styles.reportNewsSenti}>👍</div>
          <div className={styles.reportNewsDiv}>
            삼성전자의 2024년 2분기 실적은 전반적으로 긍정적인 동향을 보였습니다. AI 시장 성장에 따른 메모리 반도체 수요 증가와 가격 상승으로 인해 영업이익이 크게 개선되었고, 특히 DS부문의 실적이 대폭 상승했습니다. 또한 OLED 판매 호조와 지속가능경영을 위한 노력, 그리고 투자자와의 소통 강화 등 긍정적인 움직임이 있었습니다
          </div>
        </div>
        <div className={styles.reportNewsWrap}>
          <div className={styles.reportNewsSenti}>👎</div>
          <div className={styles.reportNewsDiv}>
            반면, 일부 부정적인 측면도 있었습니다. MX부문에서는 주요 원자재 가격 상승으로 인해 수익성이 다소 하락했습니다. 또한, 삼성전자의 5세대 고대역폭 메모리(HBM) 제품이 NVIDIA의 품질 검증을 받고 있는 상황에서, 이 테스트 통과 여부가 향후 실적에 영향을 미칠 수 있는 불확실성으로 남아있습니다
          </div>
        </div>
      </div>
      <div className={styles.reportInnerBox}>
        <div className={`${styles.reportDiv} ${styles.left}`}>
          <div className={styles.reportInnerDiv}>
            내부자들의 월별 매도/매수 현황
          </div>
          <div className={styles.reportInnerDiv}>
            <BigHandMonthlyTradeWidget quarter={2} />
          </div>
        </div>
        <div className={`${styles.reportDiv} ${styles.right}`}>
          <div className={styles.reportInnerDiv}>월별 기사 분석</div>
          <div className={styles.reportInnerDiv}>
            <MonthlyBubbleChart quarter={2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TmpAIReport;
