import data from './user.json';
import './App.css';
function DisplayUser(){
    const userData = data.map(
      (info)=> {
        return(
            <tr>
              <td>{info.id}</td>
              <td><img className="pic" src={info.anh} alt={info.fullname}></img></td>
              <td>{info.fullname}</td>
              <td>{info.ngaycong}</td>
              <td>{info.luongcoban}</td>
              <td>{info.tongluong}</td>
            </tr>
          );
        }
      );
    
    return (
      <div>
        <table className='table'>
          <thead>
            <tr> 
              <th>STT</th>
              <th>Ảnh</th>
              <th>Họ tên</th>
              <th>Ngày Công</th>
              <th>Lương Cơ Bản (VNĐ)</th>
              <th>Tổng Lương (VNĐ)</th>
            </tr>
          </thead>
          <tbody>
            {userData}
          </tbody>
        </table>
        
      </div>
  );
}

  export default DisplayUser;