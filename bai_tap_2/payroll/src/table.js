import './table.css';
    function User(){
        const user=[
            {id:1,fullname:"Dũng", position:"BA",workday:26 , basic_salary: 5000 ,actual_salary: 4950},
            {id:2,fullname:"Trung", position:"DEV",workday:26, basic_salary: 4000 ,actual_salary: 3960},
            {id:3,fullname:"Lê", position:"Tester", workday:26, basic_salary: 3000 ,actual_salary: 2970},
            {id:4,fullname:"Thành", position:"Tester", workday:26, basic_salary: 2000 ,actual_salary: 1980},            
        ];
    return(
        <div>
            <h1>Bảng lương tháng 9 </h1>
            <table className="myTable">
                <tr>
                    <th className='ID Item'>ID</th>
                    <th className='FullName Item'>FullName</th>
                    <th className='Position Item'>Position</th>
                    <th className='WorkDay Item'>Workday</th>
                    <th className='Basic Salary Item'>Basic salary  </th>
                    <th className='Salary Item'>Actual salary</th>
                </tr>
                {user.map((user,key) =>{
                    return (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.fullname}</td>
                            <td>{user.position}</td>
                            <td>{user.workday}</td>
                            <td>{user.basic_salary}</td>
                            <td>{user.actual_salary}</td>
                         
                        </tr>
                    )
                } )}
            </table>
        </div>
        
    );
}
export default User  ;