import HeightBox from "./HeightBox";
import styles from "./StockPage.module.css";

function NewsBox(props) {
    return (
        <div style={{
            height: "7em",
            minHeight: "72px",
            display: "flex",
            width: "30em",
        }}
        className={styles.newsContainer}>
            {/*이미지*/}
            <div style={{
                width: "33%",
                minWidth: "30%",
                height: "100%",
            }}>
                <img src={props.newsImg} style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "16px",
                }}/>
            </div>
            {/*오른쪽*/}
            <div style={{
                padding: "0.25em 0 0 1em",
                width: "100%",
                height: "100%",
            }}>
                {/*제목*/}
                <div style={{
                    fontSize: "1.2em",
                    textAlign: "left",
                    color: "black",
                }}>
                    {props.newsHeader}
                </div>
                <HeightBox height={3}/>
                {/*내용*/}
                <div style={{
                    width: "100%",
                    textOverflow: "ellipsis",
                    color: "#4E5968",
                    overflow: "hidden",
                    fontSize: "1em",
                    textAlign: "left",
                    display: "-webkit-box",
                    webkitLineClamp: "3",
                    webkitBoxOrient: "vertical",
                }}>
                    {props.newsInfo}
                </div>
            </div>
        </div>
    );
}


export default NewsBox;