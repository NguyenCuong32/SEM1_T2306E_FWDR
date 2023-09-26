import React from "react";
import './Infor.css';
const Infor = (props) => {
  console.log(props) 
  return (
    <div>
      <ul>
          <li><b>Fullname:</b> {props.name}</li>
          <li><b>Role:</b> {props.role}</li>
          <li><b>Latest login:</b>  {props.login}</li>
          
      </ul>
    </div>
  );
};
export default Infor;