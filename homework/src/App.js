
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './asd/user';
import Layout from './layout';
import Product from './asd/product';
import Table from './asd/table'
function App() {
  return ( 
    <BrowserRouter>
      <Layout /> 
      <Routes>
        <Route path="/User" element={<User />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;