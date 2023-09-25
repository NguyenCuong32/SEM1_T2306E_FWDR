import React from "react";
import Image from '../img/Hinh-anh-con-gai-cute-de-thuong (22).jpg'

 function Home(){
   
  return (
         
     <div  style={{display:"flex", padding:"100px"}}>
      <img style={{borderRadius:"60%", width :"200px"}} src={Image} alt='hình ảnh'/>
      <table style={{marginLeft:"30px"}} >
        <thead>
        <tr>
          <td>Fullname:</td>
          <td>Nguyễn Van A</td>
        </tr>
        <tr>
          <td>Role</td>
          <td>Admin</td>
        </tr>
        <tr>
          <td>Lastest Login:</td>
          <td style={{fontStyle:"italic",  transform: "translateY(-1px)"}}>10/10/2023  10.00</td>
        </tr>
        </thead>
      </table>

     </div>
      
  );
 }
 export default Home