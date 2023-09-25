import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Table />
  </React.StrictMode>
);
reportWebVitals(); 
function Table(props) {
  const data = [
    {   name:'Nam',
     luong: "30000000",
      vt: " nhan vien ",
    }, {
      name:'Thang',
      luong: "40000000",
     vt: " Tổ trưởng ",
    }, { name:'Duc',
    luong: "50000000",
     vt: " Trưởng ban ",
    }, 
  
    { name:'Dung ',

      luong: "60000000",
     vt: "Giám đốc ",
    }
    
  ];
  return (
    <table border={1}>
      <thead>
        <tr>
        <th>
          Tên nhân viên 
          </th>
          <th>
          Vị trí 
          </th>
          <th>
          Tiền lương 
          </th>
         </tr>
      </thead>
      <tbody>
        {data.map((money, index) => (
          <tr key={index}>
            <td>{money.name}</td>
            <td>{money.vt}</td>
            <td>{money.luong}</td>
          </tr>
        ))}
      </tbody>
    </table>);
}

export default Table;

