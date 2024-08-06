function WhiteBox({width, height, children, flexGrow}) {
    return (
        <div className="white-box" style={{
            width: width,
            maxHeight: height,
            minHeight: height,
            overflowY: "auto",
            backgroundColor: "white",
            borderRadius: "16px",
            flexGrow: flexGrow,
            paddingTop: "1.75em",
        }}>
            {children}
        </div>
    );
}

export default WhiteBox;