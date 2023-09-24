import React, { useEffect, useState } from 'react';
import '../css/dislike.css';

function Dislike(){
    const [dislike, setDislike] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(()=>{
      setDislike(()=>dislike+1)
    },[dislike]);
    return(
      <div>
      <button className='dislike' onClick={()=>setCount((c)=>c+1)}>👎 {count}</button>
      </div>
    );
  }
  
  export default Dislike;