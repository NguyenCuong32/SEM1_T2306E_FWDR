import React, { useEffect, useState } from 'react';
import { Form } from 'react-router-dom';
import './user.css';
function User(){
  const [count,setCount] = useState(0);
  const [like,setLike] = useState(0);
  useEffect(()=>{
    setCount(()=>(count+1))
  },[]);
  useEffect(()=>{
    setLike(()=>(like+1))
  },[]);
  const users = [
    {
      name: "Nguyễn Đức Việt",
      avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZuBAQ6mWmRanqxhpWgA3DbRu_RJHpWcV2w&usqp=CAU",
      role:"admin",
      Lastestlogin:"10/10/2023",
    }
  ];

  return (
    <div >
      {users.map((user) => (
        <div>
            <div  className='user'>
            <img className='img1' src={user.avatar} style={{ width: '200px', height: '200px' }} />            
            <h4 style={{padding:'20px'}}>Fullname: 
            <br></br>
            <span>Role: </span>
            <br></br>
            <span >Lastest login: </span>
            </h4>
            <h4 style={{padding:'20px'}}>{user.name}<br></br>{user.role}<br></br>{user.Lastestlogin}</h4>
            
            </div>
          <div> 
            <button style={{ width: '100px',}} onClick={() => setLike(like + 1)}>👍 {like}</button>
            <button style={{ width: '100px',}} onClick={() => setCount(count + 1)}>👎 {count}</button>
          </div>
        </div>     
      ))}
        <div className='address'>
            <h4>Address:No 8,Ton That Thuyet</h4>
            <div className='fz'>
                <span className='fa1'><h4>Facebook</h4></span>                
                <span className='zl1'><h4>Zalo</h4></span>                
            </div> 
        </div>
    </div>
  );
}

export default User;