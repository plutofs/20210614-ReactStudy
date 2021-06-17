import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*
import App from './App';
import Props from './20210615/Props+유효성체크(PropsTypes)'
import Test from './20210615/생명주기'
*/
import App from './20210617/App'
import reportWebVitals from './reportWebVitals';

/**
|--------------------------------------------------
| 기본적으로 실행되는 리액트소스.
| 여기서 App대신 원하는 컴포넌트 위치와
| 이름을 넣어서 실행하면
| 메인페이지가 해당 컴포넌트로 출력된다. 
|--------------------------------------------------
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
