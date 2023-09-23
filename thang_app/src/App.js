
import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './router/home';
import Table from './router/table';
import User from './router/user';
import Layout from './router/layout';
function App() {
  return (
    
      <BrowserRouter>
      <Layout/>
        <Routes>
          {/* <Route path="/"  element={<Layout/>}></Route> */}
          <Route path="/home"  element={<Home/>}></Route>
          <Route path="/table"  element={<Table/>}></Route>
          <Route path="/user"  element={<User/>}></Route>
        </Routes>     
      </BrowserRouter>
  );
}

export default App;
