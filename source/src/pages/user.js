import  './App1.css';
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
function User(props) {
   const name1 = "Gigi Hadid" ;
   const name2 = "Leonardo DiCaprio" 
    const pic = props.pic;
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [calculation, setCalculation] = useState(0);
    useEffect(() => {
      setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here
  return (
   <>

   <section>
    <table>
      <tr>
        <td colSpan={2}><img className="boderexam1" src = {"https://media.allure.com/photos/6438152554081c6c846d77de/master/w_1600,c_limit/gigi%20hadid%20good%20hair%20day.jpg"} width="300" height="380" alt = {name1}/></td>
        <td colSpan={2}><img className="boderexam1" src = {"https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/4/26/photo-1650990843778-1650990844390345942486.jpg"} width="300" height="380" alt = {name2}/></td>
      </tr>
      <tr>
        <td colSpan={2}><h2 classname="username" >Người mẫu <span className="user-firt-name"> {name1}</span></h2></td>
        <td colSpan={2}><h2 classname="username" >Diễn viên <span className="user-firt-name"> {name2}</span></h2></td>
      </tr>
      <tr>
      <td><button onClick={() => setCount((c) => c + 1)}>Like 👍{count}</button> </td>
      <td><button onClick={() => setCount1((d) => d + 1)}>Dislike 👎{count1}</button></td> 
      <td><button onClick={() => setCount((c) => c + 1)}>Like 👍{count}</button> </td>
      <td><button onClick={() => setCount1((d) => d + 1)}>Dislike 👎{count1}</button></td> 
      </tr>
       {/* <tr>
       <td><p style={{fontWeight:'bold'}}>Number of likes: {count}</p> </td>
      <td><p style={{fontWeight:'bold'}}>Number of dislikes: {count1}</p></td> 
      </tr> */}

    </table>

   </section>
 
  
  {/* <p>Sum of follow: {count}+{count1}</p> */}
  

      
   </>
  )
}
export default User;