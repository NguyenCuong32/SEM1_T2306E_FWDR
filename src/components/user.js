import '../components/user.css';
import '../components/like.js';
import React, { useEffect, useState } from 'react';

function User({name, pic}) {

  const [count, setCount1] = useState(0);
    const [calc, setCalc1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [calc2, setCalc2] = useState(0);
    useEffect(()=>{
      setCalc1(()=>count+1);
    },[count]);
    useEffect(()=>{
      setCalc2(()=>count2+1);
    },[count2]);

    return (
      <section className='flex-container'>
        <div className='flex-item'>
        <img className = 'user-pic' src = {pic} alt = {name} />
        </div>
        <h2 className='user-name'>
        😋🥰 HELLO <span className='firstname'>{name}</span> 🥰 😋♊
        </h2>
        <div className='bt'>
      <button onClick={()=>setCount1((c)=>c+1)}> Like 👍 {calc}</button>
      <button onClick={()=>setCount2((c)=>c+1)}> Dislike 👎 {calc2} </button>
      </div>

      </section>
    )
  }
  function App1() {
    const users = [
      {
        name: "TUNG",
        pic: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        name: "NAM",
        pic: "https://cdn.shopify.com/s/files/1/1236/1344/files/Screen_Shot_2020-02-01_at_15.26.12_2048x2048.png?v=1584862728",
      },
      {
        name: "DUNG",
        pic: "https://cdn.shopify.com/s/files/1/1236/1344/files/22-3_2048x2048.jpg?v=1584862946",
      },
      {
        name: "THANG",
        pic: "https://cdn.shopify.com/s/files/1/1236/1344/files/22-3-11_2048x2048.jpg?v=1584866378",
      },
      {
        name: "DUC",
        pic: "https://cdn.shopify.com/s/files/1/1236/1344/files/22-39-14_2048x2048.jpg?v=1584867696"
      }
    ];
    return (
        <div>
          {
            users.map((usr) => (
              <User name={usr.name} pic={usr.pic} />
            )
            )
          }
        </div>  
    );
  }
  
  export default App1;