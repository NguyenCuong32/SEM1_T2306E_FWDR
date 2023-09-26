import React from "react";

class STable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          name: "nguyen dat",
          position: "Software",
          experience: 5,
        },
        {
          name: "nguyen dat",
          position: "Data",
          experience: 3,
        },
      ],
    };
  }

  calculateSalary(employee) {
    const baseSalary = employee.experience * 1000;
    const bonus = employee.position === "Software Engineer" ? 500 : 300;
    return baseSalary + bonus;
  }

  render() {
    const { employees } = this.state;
    const columns = [
      "Tên",
      "Chức vụ",
      "Kinh nghiệm",
      "Lương nhan",
    ];
    return (
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.experience}</td>
              <td>{this.calculateSalary(employee)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default STable
;
