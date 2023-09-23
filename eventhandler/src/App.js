import './App.css';
import {React, useState} from 'react';
// class Employee extends React.Component
// {
//   constructor()
//   {
//     super();
//     this.state = {age:"18", salary:"2000$", address:"Ha Noi"}
//   }

//   render()
//   {
//     return <h2>Phuc is <span>{this.state.age}</span> his salary is <span>{this.state.salary}</span> his address is <span>{this.state.address}</span></h2>
//   }
// }
// export default Employee;


function Login() {
  let [username, setUserName] = useState("ducanhvui123");
  let [password, setPassword] = useState("123456");

  const handleSubmit = (e) => {
    // e.preventDefault(); // Prevent the default form submission
    alert("You are logged in");
  };

  return (
    <div className='form'>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div className='input'>
          <input
            type='text'
            placeholder='username'
            autoFocus
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className='input'>
          <input
            type='password' // Use type='password' for password input
            placeholder='password'
            autoComplete='off'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Login;
