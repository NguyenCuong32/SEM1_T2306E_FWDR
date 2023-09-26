
import './user.css';

function UserInfo() {
    return (
        <>
        <header>
        <nav>
        <div className="flex-container">
        <button className="flex-item1">Product</button>
        <button className="flex-item2">User Information</button>
        </div>
        </nav>
        </header>
  <br/> <br/>

      <div className="flex-container">
        <div className="flex-item3"><img className="ava" src="https://tnmthcm.edu.vn/hinh-nen-may-tinh-3d-cute/imager_44950.jpg" alt=""></img></div>
        <div className="flex-item4">
          <h>Full name: <span className="name">Nguyen Van A</span></h><br></br><br></br>
          <h>Role: <span className="name">Admin</span></h><br></br><br></br>
          <h>Lastest Login: <span className="name">10/10/2023 10:00</span></h>
        </div>

      </div>
      </>
    );
  }
  export default UserInfo;