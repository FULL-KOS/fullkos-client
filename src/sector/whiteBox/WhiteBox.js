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
            padding: "16px",
        }}>
            {children}
        </div>
    );
}

export default WhiteBox;