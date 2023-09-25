import React from "react";
import "./table.css"
    function table(){
        var employees = [
             
              {name :"son",  salary:1203 , product:'2'},
              {name :"hai", salary:1233, product:'3' },
              {name :"thao", salary:3432, product:'4' },
              {name :"tu", salary:212 , product:'5'},
              {name :"linh",salary: 331, product:'6' },
              {name :"hoa",  salary:2121 , product:'7'},
              {name :"nhi", salary:4234 , product:'8'},
              {name :"hung",salary: 1212, product:'9' }, 
              {name : "hien", salary: 103, product:'10' }
        ];
        return(
            <div className="table">
                <table >
                  <thead>
                    <tr>
                        <th>name</th>
                        <th>product</th>
                        <th>salary</th>

                    </tr>

                  </thead>
                  <tbody>
                    {employees.map((employee, index) =>(
                        <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{employee.product}</td>
                            <td>{employee.salary}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        )
    }
    export default table