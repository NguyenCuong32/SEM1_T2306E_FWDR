import './CSS/user.css';

 function User () {
  return(
    <div>
    <br/>
    <div className='flex-container'>
    <div className='flx1'><img className='user-profile-pic' src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300" alt="Mark"/></div>
     <span className='flx2'>
       <h>Full name: Nguyen Van A</h><br/>
        <h>Role: Admin</h><br/>
        <h>Lastest Login: 10/10/2023 10:00</h><br/>
      </span>
     </div>
     </div>
   );
 }
 export default User;