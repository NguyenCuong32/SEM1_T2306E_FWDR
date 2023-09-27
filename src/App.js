import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Pages/Layout';
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe';
import User from './Pages/User';
import blog from './Pages/blog';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="about" element={<AboutMe />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
}
export default app;