import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App></App>
);


// function Counter()
// {
//   const[count, setCount] = useState(0);
//   const[calculation, setCalculation] = useState(0);

//   // useEffect( () => {
//   //   setCalculation( () => {count * 3});
//   // }, [count]);
  
//   useEffect( () => {
//     setCalculation( () => count);
//   }, [count]);
//   return(
//     <div>
//       <h2>Counting</h2>
//       <button onClick={()=>{setCount((c) => c + 1)}}>Like</button>
//       <button onClick={() => {setCount( (a) => a - 1  )}}>Dislike</button>
//       <h3>Calculation {calculation}</h3>
//       <h4>Count {count}</h4>
//     </div>
//   )

// }