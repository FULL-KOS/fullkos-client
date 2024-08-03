import logo from './logo.svg';
import './App.css';
//리액트 라우터 사용을 위한 세팅
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AuthButton from './mainPage/AuthButton';
import LoginButton from './mainPage/LoginButton';
import Input from './mainPage/Input';
import KomPASS from './KomPASS.png';

function App() {
  return (
    <BrowserRouter>
      <div>
        <img src={KomPASS} width='60%'></img>
      </div>
      <div className='MainInfo'>
        어려운 주식투자 
        <br/>
        종목 분석을 쉽고 간편하게
      </div>
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

function Auth() {
  return (
    <div>
      <AuthButton name="로그인"/>
      <AuthButton name="회원가입"/>
    </div>
  )
}

function Login() {
  return (
    <div>
      아이디 
      <Input name="text"/>
      비밀번호 
      <Input name="password"/>
      <LoginButton name="로그인"/>
    </div>
  )
}
export default App;
