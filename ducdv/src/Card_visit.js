import logo from './logo.svg';
import './App-cardvisit.css';
import React from 'react';
import ReactDOM from 'react-dom/client';


function Tableform() {
    return (
     <>
     <header>
     <nav>
        <div class="flex-container" >
            <div id="flex-item1">Product</div>
            <div id="flex-item2">User infomation</div>
        </div>
     
    </nav>
     </header>
     <br/>
     <br/>
     <br/>
     <body>
     <table>
     <tr>
      <td rowSpan={3} width={460}><img src={"https://www.hoteljob.vn/files/Ni%20-%20%E1%BA%A2nh%20HTJ/2018/Th%C3%A1ng%207/Ban-mo-ta-cong-viec-nhan-vien-dat-phong-khach-san-01.png" }width="350" height="260" align="center" ></img></td>
      <th>Fullname:</th>
      <td>Nguyen Van Anh</td>
    </tr>
    <tr>
      <th>Role:</th>
      <td>Admin</td>
    </tr>
    <tr>
      <th>Latest login:</th>
      <td>10/10/2023 10:00</td>
    </tr>

    
  </table>
    
  
  </body>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
 
  <footer>
  <nav>
     <div class="flex-container2" >
         <div id="flex-item3">Address: No 8, Ton That Thuyet</div>
         <button id="flex-item4"  ><a href="https://www.facebook.com/">Facebook</a></button>
         <button id="flex-item5"><a href="https://id.zalo.me/account?continue=https%3A%2F%2Fchat.zalo.me%2F">Zalo</a></button>
     </div>
  
 </nav>
  </footer>
  </>
    );
}
  export default Tableform;