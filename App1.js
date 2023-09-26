import logo from './logo.svg';
import './App.css';
import React  from 'react';

function App() {
  return (
<>
  <header>
    <div className="flex-container">
      <div className="flex-item1" />
      <div className="flex-item2">ABC Company</div>
      <div className="flex-item3">Wellcome Admin</div>
    </div>
  </header>
  <nav>
    <div className="flex-container">
      <div className="flex-item4">
        <a
          href="product.html"
          style={{ color: "white", textDecoration: "none" }}
        >
          Product
        </a>
      </div>
      <div className="flex-item4">
        <a
          href="User Infomation.html"
          style={{ color: "white", textDecoration: "none" }}
        >
          User Infomation 
        </a>
      </div>
    </div>
  </nav>
  <div className="container1">
    <div><img className='c' src='https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/336367935_753425629822851_474389059768649402_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5614bc&_nc_ohc=Zo2BLWJ548wAX8j3Oo-&_nc_ht=scontent.fhan14-4.fna&oh=00_AfA19XqG2Ajw9w7K5x4tI3HnvMR1uk2PG1vD9pOaqqrX4A&oe=6513B6AE'></img></div>
    
    <div className="i">
      <b>
        <p>Full name: Nguyen tri dat</p>
      </b>
      <b>
        <p>Role: Admin</p>
      </b>
      <b>
        <p>Last login: 10/10/2023 10:00</p>
      </b>
    </div>
  </div>
  <footer>
    <div className="flex-container">
      <div className="flex-item5">Addres: Số 8, Tôn Thất Thuyết, Hà Nội</div>
      <div className="flex-item6">
        <a
          href="www.facebook.com"
          style={{ color: "black", textDecoration: "none" }}
        >
          Facebook
        </a>
      </div>
      <div className="flex-item7">
        <a
          href="www.zalo.com.vn"
          style={{ color: "black", textDecoration: "none" }}
        >
          Zalo
        </a>
      </div>
    </div>
  </footer>
</>
  );
}

export default App;
