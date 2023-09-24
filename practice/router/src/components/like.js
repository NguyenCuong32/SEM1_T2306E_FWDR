import React, { useEffect, useState } from 'react';
import '../css/like.css';

function Like(){
    const [like, setLike] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(()=>{
      setLike(()=>like+1)
    },[like]);
    return(
      <div>
      <button className='like' onClick={()=>setCount((c)=>c+1)}>👍 {count}</button>
      </div>
    );
  }
  
  export default Like;