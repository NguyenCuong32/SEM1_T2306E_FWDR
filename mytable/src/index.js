import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Employee from './components/Table';
const root1 = ReactDOM.createRoot(document.getElementById('root'));
//const root4 = ReactDOM.createRoot(document.getElementById('root'));
root1.render(
<Employee></Employee>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
