import {BrowserRouter,Route,Routes} from "react-router-dom";
import Layout from "./page/layout";
import Page from "./page/page";
import User from "./page/user";
import Footer from "./page/footer";
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element= {<Page/>} />
            <Route path="/user" element={<User/>} />
          </Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
