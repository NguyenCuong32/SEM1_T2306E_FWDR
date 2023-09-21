import './table.css';

function Table({stt,ten,hinhanh,ngaycong,luongcoban,tongluong}) {
    return (
        <tr>
            <td>{stt}</td>
            <td>{ten}</td>
            <td><img className='pic' src={hinhanh} alt={ten}></img></td>
            <td>{ngaycong}</td>
            <td>{luongcoban}</td>
            <td>{tongluong}</td>
        </tr>
    )
}

function User() {
    const users = [
        {
            stt: "1",
            ten: "TUNG",
            hinhanh: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            ngaycong: "26",
            luongcoban: "4000000",
            tongluong: "12000000"
        },
        {
            stt: "2",
            ten: "NAM",
            hinhanh: "https://cdn.shopify.com/s/files/1/1236/1344/files/Screen_Shot_2020-02-01_at_15.26.12_2048x2048.png?v=1584862728",
            ngaycong: "20",
            luongcoban: "2000000",
            tongluong: "7000000",
        },
        {
            stt: "3",
            ten: "THANG",
            hinhanh: "https://cdn.shopify.com/s/files/1/1236/1344/files/22-3_2048x2048.jpg?v=1584862946",
            ngaycong: "28",
            luongcoban: "5000000",
            tongluong: "15000000"
        },
        {
            stt: "4",
            ten: "DUC",
            hinhanh: "https://cdn.shopify.com/s/files/1/1236/1344/files/22-3-11_2048x2048.jpg?v=1584866378",
            ngaycong: "21",
            luongcoban: "3000000",
            tongluong: "10000000"
        }
    ];
    return (
        <div>
        <table className='Table'>
            <tr>
                <th>STT</th>
                <th>Họ và tên</th>
                <th>Hình ảnh</th>
                <th>Ngày công</th>
                <th>Lương cơ bản</th>
                <th>Tổng lương</th>
            </tr>       
        {
          users.map((usr) => (
            <Table stt={usr.stt} ten={usr.ten} hinhanh={usr.hinhanh} ngaycong={usr.ngaycong} luongcoban={usr.luongcoban} tongluong={usr.tongluong} />
          )
          )
        }
        </table>
      </div>
    )
}

export default User;