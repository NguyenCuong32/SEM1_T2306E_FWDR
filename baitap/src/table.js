import './table.css';

function Table({stt,ten,hinhanh,ngaycong,luongcoban,tongluong}) {
    return (
        <tr>
            <td>{stt}</td>
            <td>{ten}</td>
            <td><img className='Avata' src={hinhanh} alt={ten}></img></td>
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
            ten: "THÙY LINH",
            hinhanh: "https://i1-giaitri.vnecdn.net/2020/11/03/lisa-1604377908.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=XazqtROHa48NIU0RA65wyA",
            ngaycong: "26",
            luongcoban: "4000000",
            tongluong: "12000000"
        },
        {
            stt: "2",
            ten: "YẾN VY",
            hinhanh: "https://i1-giaitri.vnecdn.net/2020/11/03/dich-le-nhiet-ba-1604377906.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=NGjQzy_UNPUZ6Jv-fufAAw",
            ngaycong: "20",
            luongcoban: "2000000",
            tongluong: "7000000",
        },
        {
            stt: "3",
            ten: "THANH LAM",
            hinhanh: "https://i1-giaitri.vnecdn.net/2020/11/03/trieu-le-dinh-1604377909.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=37W01QOJRlHLlsKj6PCPIw",
            ngaycong: "28",
            luongcoban: "5000000",
            tongluong: "15000000"
        },
        {
            stt: "4",
            ten: "BAO THY",
            hinhanh: "https://i1-giaitri.vnecdn.net/2020/11/03/Jisoo-1604377907.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=0hNMgJplvNkU9ew30RZsSQ",
            ngaycong: "28",
            luongcoban: "5000000",
            tongluong: "15000000"
        },
        {
            stt: "5",
            ten: "HONG NHUNG",
            hinhanh: "https://i1-giaitri.vnecdn.net/2020/11/03/Miyawaki-Sakura-1604377908.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Uu7twLwp6jttmZ9Et-IJnw",
            ngaycong: "28",
            luongcoban: "5000000",
            tongluong: "15000000"
        },
        {
            stt: "6",
            ten: "JUN HEE SOON",
            hinhanh: "https://i1-giaitri.vnecdn.net/2020/11/03/Irene-1604377907.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=0qA1NhBdaBoeBk_ieLm6FA",
            ngaycong: "28",
            luongcoban: "5000000",
            tongluong: "15000000"
        },
        {
            stt: "7",
            ten: "ĐỆM KIMĐAN",
            hinhanh: "https://znews-photo.zingcdn.me/Uploaded/bpivpjbp/2016_10_23/camanhtrai021459665875375ava.jpg",
            ngaycong: "28",
            luongcoban: "5000000",
            tongluong: "15000000"
        },
        {
            stt: "8",
            ten: "SUKADA",
            hinhanh: "https://i1-giaitri.vnecdn.net/2020/11/03/Moonbyul-1604377908.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=VUeCQKQG48wdFDWSjdxXVw",
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