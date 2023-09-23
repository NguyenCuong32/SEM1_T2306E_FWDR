
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import User from './pages/user';
import AboutMe from './pages/about';
import Layout from './pages/layout';
import Blog from './pages/blogs';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Home/>}></Route>
          <Route path='user' element={<User/>}></Route>
          <Route path='about' element={<AboutMe/>}></Route>
          <Route path='blog' element={<Blog/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
