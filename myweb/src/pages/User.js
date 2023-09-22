import './CSS/user.css';
import {useState,useEffect} from 'react';
function Counter(){
  const [count,setCount] = useState(0);
  const [calculation,setCalculation] = useState(0);
  useEffect(()=>{
    //setCalculation(()=>count-1);
  },[count]);
  return(
    <div>
      <button onClick={()=>setCount((c)=>c+1)}><span>&#128077;</span></button>
      <button onClick={()=>setCalculation((c)=>c+1)}><span >&#128078;</span></button>
      <p> Like {count} times</p>
      <p>  Dislike {calculation} times</p>
    </div>
  )
}
function App ({name,pic}) {
  return (
   <section>
    <img className='user-profile-pic' src={pic} alt={name}/>
    <h2 className='user-name'>Hello, from <span className='user-fist-name'>{name}</span></h2>
    <Counter/>
   </section>
   );
 }
 function User () {
   const users =[
     {
       name: "Mark",
       pic: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300",
     },
     {
       name: "Spencer",
       pic: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300",
     },
     {
       name: "Robert",
       pic:  "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300",
     },
   ];
   return (
       <div className="User">
         {users.map((usr) => (
        <App name={usr.name} pic={usr.pic} />   
         ))}
     </div>
   );
 }
 export default User;