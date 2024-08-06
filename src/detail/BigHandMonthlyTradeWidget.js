import {useEffect, useState} from "react";
import {Bar} from 'react-chartjs-2';

class BigHandMonthlyTrade {
    constructor(total, month, orderType) {
        this.total = total;
        this.month = month;
        this.orderType = orderType;
    }
}

function BigHandMonthlyTradeWidget({greyBackground = true}) {

    const [bigHandMonthlyTradeList, setBigHandMonthlyTradeList] = useState([]);
    const [buyList, setBuyList] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [sellList, setSellList] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

    useEffect(() => {
        async function fetchBigHandData() {
            let response = await fetch('http://221.168.36.43/api/trading/monthly/100653/data');
            let list = await response.json();

            let tempList = [];

            let copyOfBuyList = buyList.slice();
            let copyOfSellList = sellList.slice();

            for (let e of list) {
                let bigHandMonthlyTrade = new BigHandMonthlyTrade(e['total'], e['month'], e['orderType']);
                if (bigHandMonthlyTrade.orderType === false)
                    copyOfBuyList[bigHandMonthlyTrade.month - 1] += bigHandMonthlyTrade.total;
                else {
                    copyOfSellList[bigHandMonthlyTrade.month - 1] += bigHandMonthlyTrade.total;
                }
                tempList.push(bigHandMonthlyTrade);
            }
            setBigHandMonthlyTradeList(tempList)

            setBuyList(copyOfBuyList)
            setSellList(copyOfSellList)

            console.log(bigHandMonthlyTradeList)
            console.log(copyOfBuyList)
            console.log(copyOfSellList)
        }

        fetchBigHandData();
    }, []);

    const data = {
        labels: ["2024/01", "2024/02", "2024/03", "2024/04", "2024/05", "2024/06", "2024/07", "2024/08", "2024/09", "2024/10", "2024/11", "2024/12"],
        datasets: [
            {
                label: '매수',
                data: buyList,
                backgroundColor: '#DC3912',
            },
            {
                label: '매도',
                data: sellList,
                backgroundColor: '#3366CC',
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
    };

    return (
        <div style={{padding: greyBackground ? '48px 86px' : 0, backgroundColor: '#D9D9D9', borderRadius: '18px'}}>
            <div style={{backgroundColor: 'white'}}>
                <Bar data={data} options={options}/>
            </div>
        </div>
    )
}

export default BigHandMonthlyTradeWidget;