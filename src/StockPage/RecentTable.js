function RecentTable(props) {
    const tableData = [
        {
            shareholderType: "최대주주등",
            representativeShareholder: "삼성생명보험",
            changeShareholder: "삼성생명 (특별계정)",
            changeDate: "2024.07.29",
            mainChangeReason: "장내매수(+)",
            stockType: "보통주",
            beforeChange: 1198885357,
            change: 2651,
            afterChange: 1198888008,
            shareRatio: 20.08
        },
        {
            shareholderType: "임원",
            representativeShareholder: "손석제",
            changeShareholder: "",
            changeDate: "2024.07.29",
            mainChangeReason: "신규선임(+)",
            stockType: "보통주",
            beforeChange: 0,
            change: 100,
            afterChange: 100,
            shareRatio: 0.00
        },
        {
            shareholderType: "최대주주등",
            representativeShareholder: "삼성생명보험",
            changeShareholder: "삼성생명 (특별계정)",
            changeDate: "2024.07.26",
            mainChangeReason: "장내매도(-)",
            stockType: "보통주",
            beforeChange: 1198882103,
            change: 3254,
            afterChange: 1198885357,
            shareRatio: 20.08
        },
        {
            shareholderType: "최대주주등",
            representativeShareholder: "삼성생명보험",
            changeShareholder: "삼성생명 (특별계정)",
            changeDate: "2024.07.26",
            mainChangeReason: "장내매수(+)",
            stockType: "보통주",
            beforeChange: 1198883248,
            change: -1145,
            afterChange: 1198882103,
            shareRatio: 20.08
        },
        {
            shareholderType: "최대주주등",
            representativeShareholder: "삼성생명보험",
            changeShareholder: "삼성생명 (특별계정)",
            changeDate: "2024.07.25",
            mainChangeReason: "장내매수(+)",
            stockType: "보통주",
            beforeChange: 1198883233,
            change: 15,
            afterChange: 1198883248,
            shareRatio: 20.08
        },
        {
            shareholderType: "최대주주등",
            representativeShareholder: "삼성생명보험",
            changeShareholder: "삼성생명 (특별계정)",
            changeDate: "2024.07.25",
            mainChangeReason: "장내매도(-)",
            stockType: "보통주",
            beforeChange: 1198889008,
            change: -5775,
            afterChange: 1198883233,
            shareRatio: 20.08
        },
        {
            shareholderType: "최대주주등",
            representativeShareholder: "삼성생명보험",
            changeShareholder: "삼성생명 (특별계정)",
            changeDate: "2024.07.24",
            mainChangeReason: "장내매수(+)",
            stockType: "보통주",
            beforeChange: 1198881854,
            change: 7154,
            afterChange: 1198889008,
            shareRatio: 20.08
        },
        {
            shareholderType: "최대주주등",
            representativeShareholder: "삼성생명보험",
            changeShareholder: "삼성생명 (특별계정)",
            changeDate: "2024.07.24",
            mainChangeReason: "장내매도(-)",
            stockType: "보통주",
            beforeChange: 1198882196,
            change: -342,
            afterChange: 1198881854,
            shareRatio: 20.08
        },
        {
            shareholderType: "최대주주등",
            representativeShareholder: "삼성생명보험",
            changeShareholder: "삼성생명 (특별계정)",
            changeDate: "2024.07.23",
            mainChangeReason: "장내매수(+)",
            stockType: "보통주",
            beforeChange: 1198878115,
            change: 4081,
            afterChange: 1198882196,
            shareRatio: 20.08
        },
        {
            shareholderType: "최대주주등",
            representativeShareholder: "삼성생명보험",
            changeShareholder: "삼성생명 (특별계정)",
            changeDate: "2024.07.23",
            mainChangeReason: "장내매도(-)",
            stockType: "보통주",
            beforeChange: 1198882941,
            change: -4826,
            afterChange: 1198878115,
            shareRatio: 20.08
        },
        {
            shareholderType: "최대주주등",
            representativeShareholder: "삼성생명보험",
            changeShareholder: "삼성생명 (특별계정)",
            changeDate: "2024.07.22",
            mainChangeReason: "장내매수(+)",
            stockType: "보통주",
            beforeChange: 1198882934,
            change: 7,
            afterChange: 1198882941,
            shareRatio: 20.08
        }
    ];

    const Table = () => {
        return (
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
                <thead>
                <tr style={{backgroundColor: '#f0f0f0'}}>
                    <th>주주유형</th>
                    <th>대표주주</th>
                    <th>변동주주</th>
                    <th>변동일</th>
                    <th>주요변동사유</th>
                    <th>주식종류</th>
                    <th>변동전</th>
                    <th>변동</th>
                    <th>변동후</th>
                    <th>지분율</th>
                </tr>
                </thead>
                <tbody>
                {tableData.map((row, index) => (
                    <tr key={index} style={{backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9'}}>
                        <td>{row.shareholderType}</td>
                        <td>{row.representativeShareholder}</td>
                        <td>{row.changeShareholder}</td>
                        <td>{row.changeDate}</td>
                        <td>{row.mainChangeReason}</td>
                        <td>{row.stockType}</td>
                        <td>{row.beforeChange.toLocaleString()}</td>
                        <td>{row.change.toLocaleString()}</td>
                        <td>{row.afterChange.toLocaleString()}</td>
                        <td>{row.shareRatio.toFixed(2)}%</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    };

    return Table();


}

export default RecentTable;