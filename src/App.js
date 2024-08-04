import logo from './logo.svg';
import './App.css';
//리액트 라우터 사용을 위한 세팅
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthButton from './mainPage/AuthButton';
import LoginButton from './mainPage/LoginButton';
import Input from './mainPage/Input';
import Index from './mainPage/Index';
import UserReport from './userReportPage/UserReport';

function App() {
  const [idValue, setId] = useState('');
  const [pwValue, setPw] = useState('');
  const navigate = useNavigate();

  const saveUserId = event => {
    setId(event.target.value);
  };

  const saveUserPw = event => {
    setPw(event.target.value);
  };

  function Auth() {
    return (

      <div>
        <AuthButton name="로그인" path="/login"/>
        <AuthButton name="회원가입" path="/"/>
      </div>
    )
  }

  const LoginProcess = () => {
    // Mockdata는 POST 방식 불가
    fetch('/mockData/Joohee/loginData.json', {
      method: 'GET',
      // headers: {
      //   Accept: "application / json",
      //   'Content-Type': 'application/json;charset=utf-8',
      // },
      // body: JSON.stringify({
      //   id: idValue,
      //   password: pwValue,
      // })
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === "LOGIN SUCCESS") {
        alert('로그인 되었습니다.');
        // localStorage.setItem('token', data.message);
        navigate("/userReport");
      } else {
        alert('가입되지 않은 정보입니다.');
      }
    });
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<div> <Index/> <Auth/> </div>}/>
        <Route path="/login" element={<div>
                                        <Index/>
                                        {/* 이렇게 안하면 포커스가 한글자 적을 때마다 풀림 */}
                                        <div>
                                          아이디 
                                          <Input name="text" value={idValue} onChange={saveUserId}/>
                                          비밀번호 
                                          <Input name="password" value={pwValue} onChange={saveUserPw}/>
                                          <LoginButton name="로그인" onClick={LoginProcess}/>
                                        </div>
                                      </div>
                                    }/>
        <Route path='/userReport' element={<UserReport/>}/>
      </Routes>
    </div>
  );
}

export default App;
