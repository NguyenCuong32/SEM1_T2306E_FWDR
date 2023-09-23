
import './table.css';  
function Table(props) {
  const data = [
    {   name:'thang',
      tienluong: "2000000000000",
      tensp: "cocacola",
    }, {
      name:'thang2',
      tienluong: "2000000000000",
      tensp: " pepsi",
    }, {name:'thang3',
      tienluong: "2000000000000",
      tensp: " nutifoot",
    }, {
      name:'thang4',
      tienluong: "2000000000000",
      tensp: "TH",
    }, {
      name:'thang5',
      tienluong: "2000000000000",
      tensp: " sp1",
    }, {
      name:'thang6',
      tienluong: "2000000000000",
      tensp: " sp1",
    }, {
      name:'thang7',
      tienluong: "2000000000000",
      tensp: " sp1",
    }
  ]
  return (
    <table border={1}>
      <thead>
        <tr>
        <th>
          Tên nhân viên 
          </th>
          <th>
          Tên sản phẩm 
          </th>
          <th>
          Tiền lương 
          </th>
         </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.tienluong}</td>
            <td>{item.tensp}</td>
          </tr>
        ))}
      </tbody>
    </table>);
}

export default Table;
