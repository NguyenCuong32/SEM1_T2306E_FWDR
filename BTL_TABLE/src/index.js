//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import App from './App';
//import Table from './model/Table';
//import Image from './Image';
//import Logo from './model/brvn-15950048783381206275371.jpg'
//import User from './Image';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(

 //<Table name1 = "Dũng" name2 = "Nam" name3 = "Thắng" name4 = "Đức" 
   // age1 = "37 tuổi"  age2 = "27 tuổi" age3 = "41 tuổi" age4 = "48 tuổi"
   // genre1 = "Nam" genre2 = "Nữ" genre3 = "Nam" genre4 = "Nam"
  //  />
  // </div>
  //<div>
//<User name = "Nam" pic = {Logo}/>
//<User name = "Thắng" pic = "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
//<User name = "Đức" pic = "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
  //</div>


//);


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
