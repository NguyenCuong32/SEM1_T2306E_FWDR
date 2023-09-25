import logo from './logo.svg';
import './App.css';
import './index.css';

function Table({stt,name,avata,workday,salary, totalsalary }){
  return(
    <tr>
      <td>{stt}</td>
      <td>{name}</td>
      
      <td><img src={avata} alt={name}></img></td>
      <td>{workday}</td>
      <td>{salary}</td>
      <td>{totalsalary}</td>
    </tr>
  )
}

function User(){
  const user =[
    {
      stt:"1",
      name:"VanLam",
      avata:"https://tse2.mm.bing.net/th?id=OIP.FsrPzZX9MU2L82s9z10-dQAAAA&pid=Api&P=0&h=220",
      workday:"30",
      salary:"$3000",
      totalsalary:"$40000"


},
{
  stt:"2",
  name:"QuangHai",
  avata:"https://tse1.mm.bing.net/th?id=OIP.6Y1nn4h0SfvFddKBrL4B5QHaLG&pid=Api&P=0&h=220",
  workday:"30",
  salary:"$4000",
  totalsalary:"$50000"

},
{
  stt:"3",
  name:"VanHau",
  avata:"https://tse2.mm.bing.net/th?id=OIP.mHGN8ak0l2W4gtPG6oahsAHaJQ&pid=Api&P=0&h=220",
  workday:"30",
  salary:"$3500",
  totalsalary:"$45000"
},
{
  stt:"4",
  name:"DuyManh",
  avata:"https://tse4.mm.bing.net/th?id=OIP.c6gKpTtPPRdC4rxzRBYYXgHaHY&pid=Api&P=0&h=220",
  workday:"30",
  salary:"$3500",
  totalsalary:"$45000"
}
  ];
  return(
    <div>
      <table>
        <tr>
          <th>STT</th>
          <th>NAME</th>
          <th>AVATAR</th>
          <th>WORKDAY</th>
          <th>SALARY</th>
          <th>TOTALSALARY</th>
        </tr>
        {
          user.map((usr) =>(
            <Table stt={usr.stt} name={usr.name} avata={usr.avata} workday={usr.workday} salary={usr.salary} totalsalary={usr.totalsalary}/>
            
          )

          )
        }

      </table>
    </div>
  )
}
export default User;