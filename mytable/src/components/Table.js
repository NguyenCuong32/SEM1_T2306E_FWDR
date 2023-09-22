import './Table.css';
function User ({name,Age,Addr,Base,workday,Total_Salary}) {
    return (
        <tr>
        <td>{name}</td>
        <td>{Age}</td>
        <td>{Addr}</td>
        <td>{Base}</td>
        <td>{workday}</td>
        <td>{Total_Salary}</td>
        </tr>
    )
}
function Employee () {
const Employees = [
   {
    Emp_name: "Nguyen Van A",
    Ag: "30",
    Add: "Hanoi",
    Base: 1500,
    work: 22,
    total: 1500*22,
   },
   {
    Emp_name: "Nguyen Van B",
    Ag: "40",
    Add: "Da Nang",
    Base: 1400,
    work: 23,
    total: 1400*23
   },
   {
    Emp_name: "Nguyen Van C",
    Ag: "45",
    Add: "Ho Chi Minh City",
    Base: 1300,
    work: 24,
    total: 1300*24,
   },
];
return (
    <div>
        <table className='myTable'>
        <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
        <th>Base</th>
        <th>Work day</th>
        <th>Total salary</th>
        </tr>
        {
        Employees.map((Emps) => (
       <User name={Emps.Emp_name} Age={Emps.Ag} Addr={Emps.Add} Base={Emps.Base} workday={Emps.work} Total_Salary={Emps.total} />   
        ))
}
        </table>
    </div>
)
}
export default Employee;