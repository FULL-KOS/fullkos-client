import HeightBox from "./HeightBox";

function NewsBox({image}) {
    return (
        <div style={{
            padding: "0 16px",
            height: "72px",
            maxHeight: "72px",
            minHeight: "72px",
            display: "flex",
        }}>
            {/*이미지*/}
            <div style={{
                width: "93px",
                minWidth: "93px",
                height: "100%",
            }}>
                <img src={"https://www.infostockdaily.co.kr/news/photo/202408/200572_194905_111.jpg"} style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "16px",
                }}/>
            </div>
            {/*오른쪽*/}
            <div style={{
                padding: "0 0 0 8px",
                width: "100%",
                height: "100%",
            }}>
                {/*제목*/}
                <div style={{
                    fontSize: "13px",
                    textAlign: "left",
                    color: "black",
                }}>
                    반도체주 일제히 급락
                </div>
                <HeightBox height={8}/>
                {/*내용*/}
                <div style={{
                    width: "100%",
                    textOverflow: "ellipsis",
                    color: "#4E5968",
                    overflow: "hidden",
                    fontSize: "10px",
                    textAlign: "left",
                    display: "-webkit-box",
                    webkitLineClamp: "3",
                    webkitBoxOrient: "vertical",
                }}>
                    최근 반도체 주식들이 일제히 급락
                    하면서 주식 시장에 큰 충격을 주고
                    있습니다. 주요 반도체 기업들의 주가가 '뚝'
                </div>
            </div>
        </div>
    );
}


export default NewsBox;