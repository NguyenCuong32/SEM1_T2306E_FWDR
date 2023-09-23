
import React  from 'react';

function About() {
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
    <div><img className='c' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'></img></div>
    
    <div className="i">
      <b>
        <p>Full name: Nguyen Van A</p>
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

export default About;
