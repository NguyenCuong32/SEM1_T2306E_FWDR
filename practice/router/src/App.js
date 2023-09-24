import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import User from './components/user';
import About from './pages/about';

function App(){
  return(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />} >
      <Route path="home" element ={<Home />} />
      <Route path="user" element ={<User />} />
      <Route path="about" element ={<About />} />
    </Route>
    </Routes>
  </BrowserRouter>
  )
};

export default App;