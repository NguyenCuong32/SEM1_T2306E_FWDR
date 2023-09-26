import React from  'react';
import { useState } from 'react';
function Couter(){
    let[like, setLike]=useState(3);
    return(
        <div>
            <button onClick={()=>{setLike(like+2)}}>Like</button>
            <h1>{like}</h1>
        </div>
    );
}
export default Couter;