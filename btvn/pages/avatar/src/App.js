import React from "react";
import Infor from "./components/Infor"
import './App.css';
function User(props) {
  return (
<div className="container1">
  <nav className="width">
<span className="container2">
    <img className="pic1" src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.6435-9/142371472_432198654598079_3424981696182781482_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yfBJ7OVucdsAX8Dg768&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBGKF5dUK7_LPctoP0_9buqnWsljixBGGJxYfnHQL2PnQ&oe=65391C45"/>
    <Infor name="Nguyễn Quang Tú" role="Admin." login ="25/9/2023 11:49"></Infor>
</span>
<span className="container3">
    <img className="pic2" src="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.15752-9/183628502_1220297141739090_702559761245685182_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Jw45UzgxR60AX85wQrq&_nc_ht=scontent.fhan14-3.fna&oh=03_AdRwOIU_TjIZMJVIJlTajz9r08_gmtWHaN2frZVRBqMWAQ&oe=6539415B"/>
    <Infor name="Đặng Nhật Minh" role="Admin." login ="25/9/2023 3:32"></Infor>
</span>
</nav>
  </div>
   );
}

export default User;
