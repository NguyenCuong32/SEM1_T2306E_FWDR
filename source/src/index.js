

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import User from './pages/user';
//import NoPage from './pages/NoPage';

function App(){
  return(
  <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout />}>
     <Route path="/home" element ={<Home />}/>
     <Route path="/user" element ={<User />}/>

     </Route>
    </Routes>
  </BrowserRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

export default App;


