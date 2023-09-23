import React from "react";

class SalaryTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          name: "John Doe",
          position: "Software Engineer",
          experience: 5,
        },
        {
          name: "Jane Doe",
          position: "Data Scientist",
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
      "Lương",
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

export default SalaryTable;

