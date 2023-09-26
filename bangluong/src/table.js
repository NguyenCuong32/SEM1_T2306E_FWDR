import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';


const data = [
  {num_order: 1,name: "Hoàng Anh Dũng",work_day: 25,salary: "9.6 triệu" },
  {num_order: 2,name: "Nguyễn Cao Thắng",work_day: 25,salary: "9.5 triệu" },
  {num_order: 3,name: "Nguyễn Đình Nam",work_day: 25,salary: "9.4 triệu" },
  {num_order: 4,name: "Đào Viết Đức",work_day: 25,salary: "9.3 triệu" }
]


function Tableform () {
    // constructor(props) {
    //   super(props);
    //   this.state1 = {num_order: 1,name: "Hoàng Anh Dũng",work_day: 25,salary: "9.6 triệu" };
    //   this.state2 = {num_order: 2,name: "Nguyễn Cao Thắng",work_day: 25,salary: "9.5 triệu" };
    //   this.state3 = {num_order: 3,name: "Nguyễn Đình Nam",work_day: 25,salary: "9.4 triệu" };
    //   this.state4 = {num_order: 4,name: "Đào Viết Đức",work_day: 25,salary: "9.3 triệu" };
      
    // }
    // render() {
      return (
        <div>
          <h1>Bảng lương tháng 9 của tổ</h1>
          <table>
  <tr>
    <th>Num_order</th>
    <th>Full Name</th>
    <th>Work day</th>
    <th>Salary</th>
  </tr>
  {/* <tr>
    <td>{this.state1.num_order}</td>
    <td>{this.state1.name}</td>
    <td>{this.state1.work_day}</td>
    <td>{this.state1.salary}</td>
  </tr>
  <tr>
    <td>{this.state2.num_order}</td>
    <td>{this.state2.name}</td>
    <td>{this.state2.work_day}</td>
    <td>{this.state2.salary}</td>
  </tr>
  <tr>
    <td>{this.state3.num_order}</td>
    <td>{this.state3.name}</td>
    <td>{this.state3.work_day}</td>
    <td>{this.state3.salary}</td>
  </tr>
  <tr>
    <td>{this.state4.num_order}</td>
    <td>{this.state4.name}</td>
    <td>{this.state4.work_day}</td>
    <td>{this.state4.salary}</td>
  </tr> */}
    {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.num_order}</td>
                            <td>{val.name}</td>
                            <td>{val.work_day}</td>
                            <td>{val.salary}</td>
                        </tr>
                    )
    })}

</table>
        </div>
      );
    }
  


  
export default Tableform;