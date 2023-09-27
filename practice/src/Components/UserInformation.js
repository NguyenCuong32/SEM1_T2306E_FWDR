import './baitap.css';
import React from 'react';
function Userinformation() {
    const info = [{
        id: "1",
        fullname: "Nguyễn Văn A",
        age: "30",
        address: "Hà Nội"
    }, {
        id: "2",
        fullname: "Nguyễn Văn B",
        age: "25",
        address: "Hà Nam"
    }, {
        id: "3",
        fullname: "Nguyễn Văn C",
        age: "26",
        address: "Hưng Yên"
    },];
    const item = info.map((per) => {
        return (
            <tbody>
                <tr>
                    <td>{per.id}</td>
                    <td>{per.fullname}</td>
                    <td>{per.age}</td>
                    <td>{per.address}</td>
                </tr>
            </tbody>
        );
    });
    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Họ và Tên</th>
                        <th>Tuổi</th>
                        <th>Quê quán</th>
                    </tr>
                </thead>
                {item}
            </table>
        </div>

    );
}
export default Userinformation;