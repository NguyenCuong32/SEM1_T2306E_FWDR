import { useState } from 'react';
import { useEffect } from 'react';
function DislikeCounter()
{
  const[count, setCount] = useState(0);
  const[calculation, setCalculation] = useState(0);

  
  useEffect( () => {
    setCalculation( () => count);
  }, [count]);
  return(
    <div>
      <button onClick={() => {setCount( (a) => a + 1  )}}>Dislike {calculation}</button>
    </div>
  )
}

export default DislikeCounter;