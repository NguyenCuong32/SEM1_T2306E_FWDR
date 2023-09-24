import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Header/><br></br><br></br><br></br><br></br>
        <Content/><br></br>
        <Footer/>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals?;
