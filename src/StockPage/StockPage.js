import WhiteBox from "./whiteBox/WhiteBox";
import NewHeader from "./NewHeader";
import styles from "./StockPage.module.css";
import HeightBox from "./HeightBox";
import NewsBox from "./NewsBox";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function StockPage() {
    let news = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
    ];
    let newsHeader = ["삼성전자 SK하이닉스 호황 끝?, 국내외 전문가 '반도체 수요 강세 더 지속'", "'반도체 부활' 알린 삼성전자…시스템LSI도 '숨은 공신'?", "삼성 '루비콘 프로젝트' MS·구글·팔란티어 3파전", "삼성전자, 업계 최소 두께 0.65mm D램 양산"];
    let newsImg = ["https://www.businesspost.co.kr/news/photo/202208/20220810191455_150343.jpg", "https://img7.yna.co.kr/etc/inner/KR/2024/08/02/AKR20240802055900003_04_i_P4.jpg", "https://img.etnews.com/news/article/2024/08/01/news-p.v1.20240801.04c7bc5f48d74eacb5bfa7706b65c2bb_P1.jpg", "https://flexible.img.hani.co.kr/flexible/normal/640/426/imgdb/original/2024/0806/20240806502253.jpg"];
    let newsInfo = ["삼성전자와 SK하이닉스가 글로벌 경기침체 가능성에 바짝 긴장하고 있다. 메모리 반도체는 대표적 경기연동형 산업으로 분류되는데, 경기침체 이슈가 현실화되면 이제 막 시작한 '슈퍼사이클'(호황기)이 예상보다 빨리 끝날 수 있기 때문이다. 하지만 많은 전문가들은 반도체 '피크아웃(정점 통과)'을 벌써부터 거론하는 것은 시기상조이며, 인공지능(AI)으로 촉발된 반도체 수요 확대는 거스를 수 없는 흐름이라는 분석을 내놓고 있다.",
        "올해 2분기 삼성전자[005930]의 전체 영업이익의 60%를 반도체 사업을 담당하는 디바이스솔루션(DS)부문이 차지한 가운데 애플리케이션 프로세서(AP) 등을 맡는 시스템LSI의 실적 개선에도 이목이 쏠린다.",
        "삼성전자가 주요 가전제품 데이터를 분석해 고객 맞춤형 답변을 제공하는 생성형 인공지능(AI) 개발에 나선다. 일명 '루비콘 프로젝트'로 불리는 이 사업에 마이크로소프트(MS), 구글, 팔란티어테크놀로지스 등 주요 AI 업체 세 곳이 경쟁을 벌인다.",
        "삼성전자가 업계에서 가장 얇은 모바일용 D램 12GB(기가바이트)와 16GB의 패키지 양산을 시작했습니다. 제품 두께는 0.65㎜로 현존하는 12GB 이상 모바일용 D램 가운데 가장 얇습니다."
    ];
    let newsLink = ["https://www.businesspost.co.kr/BP?command=article_view&num=361369", "https://www.yna.co.kr/view/AKR20240802055900003", "https://www.etnews.com/20240805000275", "https://m.science.ytn.co.kr/program/view_today.php?s_mcd=0082&key=202408061604561145"]

    function onClickAlarm() {
        alert("등록되었습니다.")
        // 여기에 알림 함수 작성
    }
    return (
        <div
            style={{
                flexDirection: "column",
                display: "flex",
                overflowY: "hidden",
                backgroundColor: "#F6F7F9",
                justifyContent: "center"
            }}
            className={styles.container}
        >
            <div style={{
                overflowY: "auto",
                backgroundColor: "#f6f7f9",
                borderRadius: "16px",
                paddingTop: "1.75em",
                marginBottom: "0%"}}>
            <div style={{fontSize: "2.5em", overflow: "auto"}}>삼성전자 분석</div>
            <button onClick={onClickAlarm} className={`${styles.btn} ${styles.rounded}`}>🔔해당 종목 내부자 거래 알림 받기</button>
            </div>
            <WhiteBox height={250}>
                <div
                    style={{
                        color: "black",
                        textAlign: "center",
                        fontSize: "1.75em",
                    }}
                >
                삼성전자 최근 내부자 거래 목록
                </div>

            </WhiteBox>
            <div className={styles.item}>
                <div className={`${styles.part} ${styles.background}`}>
                    <div>
                        내부자들의 월별 매도/매수 현황
                        <div>
                            여기에 그래프를 넣으세요
                        </div>
                    </div>
                    
                </div>
                <div className={`${styles.part} ${styles.background}`}>
                    <div>
                        월별 기사 분석
                        <div>
                            여기에 그래프를 넣으세요
                        </div>
                    </div>
                </div>
            </div>
            <WhiteBox height={250}>
                <div
                style={{
                    color: "black",
                    textAlign: "center",
                    fontSize: "1.75em",
                }}
                >
                주요 뉴스
                </div>
                <HeightBox style={{
                    }}/>
                {news.map((news, index) => {
                return (
                    <div className={styles.itemBox}> 
                    <NewsBox key={index} newsHeader={newsHeader[index%4]} newsInfo={newsInfo[index%4]} newsImg={newsImg[index%4]}/>
                    <HeightBox height={"35"} />
                </div>
            );
            })}
            </WhiteBox>
            <Link to={"/aiReport"} className={`${styles.btnAI} ${styles.rounded}`}>➡️분기별 AI 리포트 보러가기⬅️</Link>
        </div>
    )

}
export default StockPage;