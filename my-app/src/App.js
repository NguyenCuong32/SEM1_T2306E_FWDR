import React from "react";


import SalaryTable from "./SalaryTable";
const employees = [
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
];

const App = () => (
  <SalaryTable employees={employees} />
);

export default App;
