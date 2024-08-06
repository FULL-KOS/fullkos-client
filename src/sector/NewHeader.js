import WhiteBox from "./whiteBox/WhiteBox";

function NewHeader() {
    return (
        <div style={{
            backgroundColor: "#EDF2FE",
            minHeight: "60px",
        }}>
            <div style={{
                height: "16px",
            }}>
            </div>
            <div style={{
                display: "flex"
            }}>
                {/*왼쪽 */}
                <div style={{
                    width: "281px"
                }}>
                </div>
                <div style={{
                    width: "70%",
                    color: "black"
                }}>
                </div>
                {/*가운데 */}
                <div style={{
                    minWidth: "145px",
                    color: "#CCCCCC",
                    whiteSpace: "nowrap",

                }}>
                    홈
                </div>
                <div style={{
                    minWidth: "145px",
                    color: "black"
                }}>
                    섹터 별로 보기
                </div>
                <div style={{
                    width: "100%",
                    color: "black"
                }}>
                </div>

            </div>
        </div>);
}

export default NewHeader;
