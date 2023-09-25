import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import User from './components/User';
import Table from './components/Table';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path = "/" element = {<Layout/>}>
      <Route path="Table" element={<Table/>}></Route>
      <Route path="User" element={<User/>}></Route>
    </Route>
    </Routes>
    </BrowserRouter>
  )
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);