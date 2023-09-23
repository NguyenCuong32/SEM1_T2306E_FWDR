import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

//Khong dung useEffect
// function Timer(){
//   const [count, setCount] = useState(0);
//   setTimeout(()=>{
//     setCount((count)=>count+1);
//   },1000);
//   return (
//     <h1> Count {count} times</h1>
//   );
// }

// //Dung useEffect khong su dung value
// function Timer(){
//   const [count, setCount] = useState(0);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount((count)=>count+1);
//     },1000);
//   },[]);
//   return (
//     <h1> Count {count} times</h1>
//   );
// }

//Dung useEffect su dung value
function Counter() {
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
  return(
  <div>
    <button onClick={()=>(setCount1((c)=>c+1), setCount2((c)=>c-1))} style={{fontSize:500}}>Like 👍 {calc}</button>
    <button onClick={()=>(setCount2((c)=>c+1), setCount1((c)=>c-1))}> Dislike 👎 {calc2} </button>
    
  </div>
  )
}

export default Counter;
