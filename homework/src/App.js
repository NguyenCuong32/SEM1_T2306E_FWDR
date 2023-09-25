import React from 'react';
import './App.css';

function User() {
  const pic ="https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
  return (
    <section>
    <div className='border'>
    <div class="border1">Product</div>
    <div class="border2">User Information</div>
    </div>
    <div className='border'>
    <img className='img' src={pic}></img>
    <div className='grid_container'>
    <div className='grid_item'>Full Name</div>
    <div className='grid_item'>Role</div>
    <div className='grid_item'>Admin.</div>
    </div>
    <div className='grid_container1'>
    <div className='grid_italic'>Nguyen van A</div>
    <div className='grid_italic'>Latest Login</div>
    <div className='grid_italic'>10/10/2023 10:00</div>
    </div>
    </div>
    <footer>
    <p class="footer_text">
        Address No: So 8 Ton That Thuyet
    </p>
    <div class="footer_border">
    <div class="footer_border1">
        Facebook
    </div>
    <div class="footer_border2">
        Zalo
    </div>
</div>
  </footer>
</section>
  );
}

export default User;
