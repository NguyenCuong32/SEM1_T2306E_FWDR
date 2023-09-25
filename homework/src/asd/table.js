import React from "react";
import './table.css'
function table(props) {
  const data = [
    {
       ma: "1",
       ten: " nguyen van A",
       luong:"10000000",
    }, {
       ma: "2",
       ten: " nguyen van B",
       luong:"20000000",
    }, {
       ma: "3",
       ten: " nguyen van C",
       luong:"15000000",
    }, {
       ma: "4",
       ten: " nguyen van D",
       luong:"40000000",
    }, {
       ma: "5",
       ten: " nguyen van E",
       luong:"35000000",
    }, {
       ma: "6",
       ten: " nguyen van F",
       luong:"27000000",
    }, {
       ma: "7",
       ten: " nguyen van G",
       luong:"23000000",
    }
  ]
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>
            Mã
          </th>
          <th>
            Tên
          </th>
          <th>
            Tiền lương
          </th>
         </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.ma}</td>
            <td>{item.ten}</td>
            <td>{item.luong}</td>
          </tr>
        ))}
      </tbody>
    </table>);
}
export default table;