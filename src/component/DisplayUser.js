import data from '../data/user.json';
import './DisplayUser.css'
function DisplayUser(){
    const userData = data.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.username}</td>
                    <td>{info.fullname}</td>
                </tr>
            );
        }
    );
}
return(
<div>
    <table>
        <thead>
            <tr>
                <th>Mã</th>
                <th>Tên</th>
                <th>Họ Tên</th>
            </tr>
        </thead>
        <body>
            {userData}
        </body>
    </table>
</div>
)
export default DisplayUser;