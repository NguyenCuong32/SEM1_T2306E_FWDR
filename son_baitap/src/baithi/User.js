import { useState} from "react";
import React from "react";
import Flower from "../img/freestock_413912.jpg";
import Heart from "../img/heart-7854910_960_720.webp"

 function User(){
    const [likes, setLikes] = useState([9, 9]);
   
    const statuss= [
        {
            img: Flower,
            name: "Lan",
            content:"Tự do là không bị kiểm soát bởi một thế lực đối với số phận và có ý chí tự do"
        },
      
        {
            img : Heart,
            name:"Anh",
            content:"Hãy luôn giữ lòng yêu thương và lan tỏa nó cho những người xung quanh bạn."+
          " Điều này sẽ tạo ra một tác động tích cực và mang lại niềm vui cho cả bạn và những người khác."+
          "Chúc bạn có một ngày tuyệt vời "
        }
    ]
    
    function handleLike(index) {
        const newLikes = [...likes];       
        newLikes[index] = newLikes[index] === 9 ? 'bạn và 9 người khác' : 9;
        setLikes(newLikes);
      }

      
    return(
        <div style={{width:"400px", margin:"auto"}}>{
            statuss.map((status, index)=>(
            <div key={index} style={{padding:"50px", border:"1px solid black", backgroundColor:"pink"}}> 
                <p>{status.name} đã cập nhật cảm nghĩ mới:</p>
                <i>{status.content}</i>
                <br/>
                <img  style={{width:"300px"}} src={status.img} alt="hình ảnh" />
                <p key={index}>	👍🏻{likes[index]}</p>
                <button onClick={() => handleLike(index)}>Thích</button>
             
            </div>
            ))
        }
        </div>
    )
    
 }
 
 export default User