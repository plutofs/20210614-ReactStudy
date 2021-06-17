import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*
import App from './App';
import Props from './20210615/Props'
import Test from './20210615/Test'
*/
import App from './20210617/App'
import reportWebVitals from './reportWebVitals';

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
