// import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Table from './model/table';
// import Welcome from './model/welcome';

// import Person from './model/person';
// import App from './App';
import './css/table.css'
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render
// (
//   <div>
//   <App></App>
//   <App></App>
//   <App></App>
//   </div>
// );



// root.render
// (
//   <div>
//      <Welcome name="Phuc" address="Luong Yen" age="24"></Welcome>
//      <Welcome name="Trang" address="Minh Khai" age="25"></Welcome>
//      <Welcome name="Thuy" address="Bui Xuong Trach" age="26"></Welcome>
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Table></Table>
  // <Count></Count>
);


// function Count()
// {
//   // const [count, setCount] = useState(0)
//   // useEffect( () => {
//   //   setTimeout(() => {setCount(count + 2)}, 2000)
//   // });

//   // return (
//   // <h1>count {count}</h1>
//   // )
// }



