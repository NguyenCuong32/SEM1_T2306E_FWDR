import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import User from './components/user';
import About from './pages/about';
import layout from './pages/layout.css'
 
    function App(){
      return(
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
         <Route path="/home" element ={<Home />}></Route>
         <Route path="/about" element ={<About />}></Route>
         <Route path="/user" element ={<User />}></Route>
         </Route>

        </Routes>
      </BrowserRouter>
      );
    }
  


export default App;
