import logo1 from "../img/img_background.jpg";
import "./page.css";
export default function User(){
    return(
        <div>
            <div className="container-user">
                <img className="image" src={logo1} alt="Son" />
                <div>
                    <table className="table">
                        <tr>
                            <th>Fullname</th>
                            <td>: Nguyen Hong Son</td>
                        </tr>
                        <tr>
                            <th>Role</th>
                            <td>: Admin</td>
                        </tr>
                        <tr>
                            <th>Latest login</th>
                            <td>: 10/10/2023 10:10</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}