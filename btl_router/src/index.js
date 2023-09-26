import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import User from './User';
import About from './About';
//import NoPage from './pages/NoPage';

function App(){
  return(
  <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout />} >    
     <Route path="/Home" element ={<Home />}/>    
     <Route path="/User" element ={<User />}/>    
     <Route path="/About" element ={<About />}/>    
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
