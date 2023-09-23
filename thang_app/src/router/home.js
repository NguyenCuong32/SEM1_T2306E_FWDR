import React, { useEffect, useState } from 'react';
import './home.css';  
const users_list = [
    {
        
      name: "Thắng ",
      avata: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlklI17PRZYBv3yXFfPf6bE9c9VZ24Li6o_A&usqp=CAU",
    },
    {
      name: " Không phải là thắng ",
      avata: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Hình như là thắng ",
      avata: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlklI17PRZYBv3yXFfPf6bE9c9VZ24Li6o_A&usqp=CAU",
    },
    {
      name: "Chắc chắn là thắng rồi ",
      avata: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlklI17PRZYBv3yXFfPf6bE9c9VZ24Li6o_A&usqp=CAU",
    }
  ];
function Table() {
 const users=users_list;
  return (
    <div className='list-profite' >
      <UsersList  users={users}  /> 
      </div>
  );
}
function UsersList({users}){
return(
 <div classname='list-user-profite' >
  {users.map((usr) =>

    <User name={usr.name} avata={usr.avata} ></User>

  )}
 </div>
)
}
function User({name,avata}){
  return(
    <div classname="profite" style={{width:' 300px',
    height: ' 400px ',
    border: '1px solid #000 ' ,borderRadius:'10px',textAlign:'center'}}> 
    <img src={avata} alt={name} className= 'profite1' style={{margin:'20px'}} /> 
     <p className='profite2'>{name}<span>🥑🥑</span> </p>
     <Likefb></Likefb>
     </div>
  )
}
function Likefb(){
  const[like,setLike]=useState(0);
  const[dislike,setDislike]=useState(0);
  useEffect(()=>{
    setLike(()=>like+1)
  },[])
  useEffect(()=>{
    setDislike(()=>dislike+1)
  },[])
  return(
    <div className="button-list">
    <button style={{width:'100px',height:'30px'}} onClick={()=>setLike((d)=>d+1)}>👍{like}</button>
    <button style={{width:'100px',height:'30px'}}  onClick={()=>setDislike((e)=>e+1)}>👍{dislike}</button>

 </div> )
}
export default Table;