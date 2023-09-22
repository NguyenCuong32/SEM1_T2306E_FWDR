import UserInfo from '../companants/user'
import userimg from '../img/IMG_1187.jpg'
import React from 'react'
function User(){
    return(
        <React.Fragment>
            <UserInfo name="Lê Chung Dũng" role="Admin" img={userimg}></UserInfo>
        </React.Fragment>
    )
};
export default User;