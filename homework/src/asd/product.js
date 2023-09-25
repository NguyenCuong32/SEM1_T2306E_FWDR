import React, { useEffect, useState } from 'react';
function Product(){
    const[count,setCount]=useState(0);
    const[like,setLike]=useState(0);
  
    useEffect(()=>{
      setCount(()=>count+1)
    },[]);
    useEffect(()=>{
      setLike(()=>like+1)
    },[]);
  
    const handLike = (index) => {
      console.log(index)
      const newUsers = [...users];
          newUsers[index].like = users[index].like+1;
          setUsers(newUsers);
      
  };
  
  const [users, setUsers] = useState([
      {
        name: "435",
        avata: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdoTDc4GgUuLDtw0iTwJSKXPn5PSiXPIawMw&usqp=CAU ",
        like:0
      },
      {
        name: "4er35",
        avata: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4FtESFKahWDRVuWJcim_MsGi2BRkr4Irrg&usqp=CAU ",
        like:0   
      },
      {
        name: "4234",
        avata: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZuBAQ6mWmRanqxhpWgA3DbRu_RJHpWcV2w&usqp=CAU ",
        like:0
      },
      {
        name: "43245",
        avata: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1joh99zGGXCFp3osVz31zq5dd4ifMhyohVQ&usqp=CAU ",
        like:0
      },
    ]);
    return(
      <div> 
        {/* <div className='appp'> */}
            
        {users.map((users,index) => (
          <div  className='div-table'> 
        <img  className='img1' src={users.avata} style={{  width: '200px',height:'200px'}} /> 
          <p className='avata1'> hello,<span style={{color:'green'}} >{users.name}</span>🎉🎉🎉</p>
        <button onClick={()=>{handLike(index)}}>👍{users.like}</button>
        <button onClick={()=>(setCount((a)=>a+1))}>👎{count}</button>  
        </div>
        ))}
      </div>
    );
  }
  export default Product;