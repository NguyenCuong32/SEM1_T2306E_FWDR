import React from "react";


import STable from ",.STable"
const employees = [
  {
    name: "nguyen dat",
    position: "Software",
    experience: 5,
  },
  {
    name: "nguyen dat",
    position: "Data t",
    experience: 3,
  },
];

const App = () => (
  <STable employees={employees} />
);

export default App;
