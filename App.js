import { useEffect, useState } from "react";

// function Timer(){
//     const [count, setCount] = useState(1000);
//     useEffect(()=>{
//         setTimeout(()=>{
//             setCount(count - 1);
//         },1000)
//     },[]);
//     return(
//         <h1>Count {count} Times</h1>
//     );
// }
// export default Timer;


function Counter(){
  const [count, setCount] = useState(1);
  const [cal, setCal] = useState(1);
  useEffect(()=>{
    setCount(()=>count * 1);
  },[count]);
  useEffect(()=>{
    setCal(()=>cal * 1);
  },[cal]);
  return(
    <div>
    <button onClick={()=>setCount((c)=>c+1)}>👍 {count} </button>
    <button onClick={()=>setCal((d)=>d+1)}>👎 {cal} </button>
    
    </div>
  );
}
export default Counter;

