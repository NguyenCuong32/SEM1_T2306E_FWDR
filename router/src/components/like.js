import React, { useEffect, useState } from 'react';

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
      <button onClick={()=>setCount1((c)=>c+1)}> Like 👍 {calc}</button>
      <button onClick={()=>setCount2((c)=>c+1)}> Dislike 👎 {calc2} </button>
      </div>
  );
}
export default Counter;