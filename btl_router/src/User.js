
import React, { useEffect, useState } from 'react';
function User(props) {
    const name = props.name;
    const pic = props.pic;
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
   <section>
<img className="boderexam1" src = {"https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt = {name}/>
<h2 classname="username" >
Hi, <span className="user-firt-name"> {name}</span>
</h2>
<div>
    <button onClick={()=>(setCount1((c)=>c+1), setCount2((c)=>c-1))} className="abc" style={{fontSize:10}}> Like 👍 {calc}</button>
    <button onClick={()=>(setCount2((c)=>c+1), setCount1((c)=>c-1))} className="abc" style={{fontSize:10}}> Dislike 👎 {calc2} </button>
    
  </div>
   </section>
  )
}
export default User;