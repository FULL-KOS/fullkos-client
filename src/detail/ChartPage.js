import React, {useEffect, useState} from 'react';
import {Line, Bubble} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import TitleContainer from "./title/TitleContainer";
import logo from './common/KomPASS.png';
import BlueButton from "./common/BlueButton";
import BigHandMonthlyTradeWidget from "./BigHandMonthlyTradeWidget";
import SummaryTableWidget from "./table/SummaryTableWidget";
import MonthlyBubbleChart from "./bubble/MonthlyBubbleChart";


function ChartPage() {

    return (
        <div style={{padding: '48px 48px 0px 48px'}}>
            <img src={logo} alt="Description of the image"/>
            <div style={{
                backgroundColor: 'white',
                borderBottomLeftRadius: "16px",
                borderBottomRightRadius: "16px",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
            }}>
                <div>
                    <TitleContainer title="기사 및 큰 손 동향 분석"></TitleContainer>
                    <div style={{
                        padding: '0px 37px',
                    }}>
                        <div style={{height: '42px'}}></div>
                        <BlueButton content="기사 분석 결과"></BlueButton>
                        <div style={{height: '65px'}}></div>
                        <MonthlyBubbleChart/>
                        <div style={{height: '74px'}}></div>
                        <BlueButton content="큰 손 거래 분석 결과"></BlueButton>
                        <div style={{height: '76px'}}></div>
                        <BigHandMonthlyTradeWidget/>
                        <div style={{height: '76px'}}></div>
                        <BlueButton content="분기별 분석 결과"/>
                        <div style={{height: '76px'}}></div>
                        <SummaryTableWidget/>
                        <div style={{height: '50px'}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChartPage;