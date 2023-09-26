import React from "react";
import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Users from "./components/users";
import AboutUs from "./pages/about";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
         <Route path="/home" element={<Home/>}/>
         <Route path="/users" element={<Users/>}/>
         <Route path="/about" element={<AboutUs/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;