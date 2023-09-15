import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Test01 from './Test01';
// import Test02 from './Test02';
// import Test03 from './Test03';
// import Test04 from './Test04';
import Test05 from './Test05';
import Test06 from './Test06';
import Test07 from './Test07';
import Test08 from './Test08';
import Test09 from './Test09';
import reportWebVitals from './reportWebVitals';

// 3. Test01 컴포넌트 추가
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Test05 nm="임창균" age="28" addr="내 맘속" />
    <Test05 nm="손현우" age="33" addr="서울특별시 어딘가" />
    <Test06 nm="이민혁" age="32" addr="서울특별시 어딘가" />
    <Test07 nm="유기현" age="32" addr="서울특별시 어딘가" />
    <Test08 />
    <Test09 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
