import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pager/layout.js';
import Product from './pager/product.js'
import User from './pager/user information.js';
import './App.css'
function App() {
  return (
    <BrowserRouter className='pager'>
      <Routes>
        <Route className="layout" path='/' element={<Layout></Layout>}>
          <Route path='product' element={<Product></Product>}></Route>
          <Route path='userinformation' element={<User />}></Route>
        </Route>
      </Routes>
      <div className='Avatar'>
        <div className='Anh'><img className='anh1' src='https://manta.edu.vn/wp-content/uploads/2022/12/hinh-anh-nu-sinh-dep-nhat-2-1.jpg'></img></div>
        <div className='comtern'>
          <h>Full name: <span className='name'> <i>Nguyen Van A</i></span></h>
          <br />
          <br />
          <h>Role: <span className='name'><i>Admin</i></span></h>
          <br />
          <br />
          <h>Lastest Login: <span className='name'><i>10/10/2023 10:00</i></span></h>
        </div>
      </div>
      <footer>
        <div class="Footer">
          <div className="address">Address: No 8, Ton That Thuyet, Ha Noi</div>
          <div className="facebook"> <a href="https://www.facebook.com/" className='footer' >facebook</a></div>
          <div className="zalo"> <a href="https://www.zalo.me/pc" className='footer' >zalo</a></div>

        </div>
      </footer>
    </BrowserRouter>
  );
}
export default App;