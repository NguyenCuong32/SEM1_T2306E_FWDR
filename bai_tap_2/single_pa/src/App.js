
import {BrowserRouter, Route, Routes} from 'react-router-dom' ;
import Layout from './pages/layout' ;
import Product from './pages/Product' ;
import User from './pages/User' ;

function App (){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="Product" element={<Product/>}></Route>
        <Route path="User" element={<User/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
};
export default App ;