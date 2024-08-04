import React from "react";
import KomPASS from '../KomPASS.png';

function Index() {
    return (
        <div>
            <div>
                <img src={KomPASS} width='60%'></img>
            </div>
            <div className='MainInfo'>
                어려운 주식투자 
                <br/>
                종목 분석을 쉽고 간편하게
            </div>
        </div>
    )
}

export default Index;