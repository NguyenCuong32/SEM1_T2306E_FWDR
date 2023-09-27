import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes,Route } from 'react-router-dom';
import './Components/baitap.css';
import { BrowserRouter } from 'react-router-dom';
import Product from './Components/Product';
import Userinformation from './Components/UserInformation';
import Layout from './Components/layout';
// import The from './Components/the';
// import reportWebVitals from './reportWebVitals';
// import UserInformation from './Components/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <BrowserRouter>
        <Routes classname="routes">
            <Route path='/' element={<Layout/>}>
                <Route path='product' element={<Product/>}/>
                <Route path='userinformation' element={<Userinformation/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    // </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();