import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import Test01 from './Test01';
//import Test02 from './Test02';
//import Test03 from './Test03';
//import Test04 from './Test04';
//import Test05 from './Test05';
import Test06 from './Test06';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
// bootstrap 설치
// yarn 설치 - D:\park\react\ch03 > yarn add react-bootstrap bootstrap
// npm 설치 - D:\park\react\ch03 > npm install react-bootstrap bootstrap

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Test06 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
