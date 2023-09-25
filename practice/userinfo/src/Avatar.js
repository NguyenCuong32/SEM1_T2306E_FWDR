import './Avatar.css';

function Avatar() {
  return (
    <div className='flex-container'>
      <div className='flex-item3'><img className='avatar' src="https://cdn.shopify.com/s/files/1/1236/1344/files/22-3_2048x2048.jpg?v=1584862946" alt=""></img></div>
      <div className='flex-item4'>
        <h>Full name: <span className='name'>Nguyen Van A</span></h><br></br><br></br>
        <h>Role: <span className='name'>Admin</span></h><br></br><br></br>
        <h>Lastest Login: <span className='name'>10/10/2023 10:00</span></h>
      </div>
    </div>
  );
}

export default Avatar;