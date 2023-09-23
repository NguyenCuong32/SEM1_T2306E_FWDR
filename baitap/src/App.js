import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pager/layout.js';
import Product from './pager/product.js'
import User from './pager/user information.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route className="layout" path='/' element={<Layout></Layout>}>
          <Route path='product' element={<Product></Product>}></Route>
          <Route path='userinformation' element={<User />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
