const company = [
    { name: "Phuc", age: 24, gender: "Male", address: "Ha Noi" },
    { name: "Thuy", age: 21, gender: "Female", address: "Lang Son" },
    { name: "Trang", age: 25, gender: "Male", address: "Ha Noi" },
]

function Table(props)
{
    return  (
    <div>
        <table className="myTable">
            <thead>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Address</th>
            </thead>

            {company.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.gender}</td>
                            <td>{val.address}</td>
                        </tr>
                    )
                })}
        </table>
    </div>
    );
}

export default Table;