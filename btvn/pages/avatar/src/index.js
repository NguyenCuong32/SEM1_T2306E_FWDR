import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout';
import Infor from './components/Infor';
import Footer from './components/Footer'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='width'>
  <React.StrictMode>
    <Layout/>
    <App />
    <Footer/>
  </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
