import { useState } from 'react';
import { useEffect } from 'react';
function LikeCounter()
{

  const[count, setCount] = useState(0);
  const[calculation, setCalculation] = useState(0);


  
  useEffect( () => {
    setCalculation( () => count);
  }, [count]);
  return(
    <div>
      <button onClick={()=>{setCount((c) => c + 1)}}>Like {calculation}</button>
    </div>
  )
}

export default LikeCounter;