import React from "react";
import data from "./data.json"
import "./table1.css"
function Table(){
    const user = data.map((item)=>
    <tr>
      <td>{item.id}</td>
      <td>{item.username}</td>
      <td>{item.fullname}</td>
    </tr> )
    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Mã</th>
                        <th>Họ Tên</th>
                        <th>Họ</th>
                    </tr>
                </thead>
                <tbody>
                    {user}
                </tbody>
            </table>
            <form>
                <h1>Post user</h1>
                <p>username</p>
                <input  type="text" name="username" placeholderhoder="nguyen" required></input>
                <p>password</p>
                <input  type="password" name="password" required></input>
                <br></br>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}
export default Table;