import { useState } from 'react';
import './Form.css';

function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const HandleSubmit = (event)=>{
        event.preventDefault();
        if(email==='tuma.hnpt@gmail.com'&&password==='Anhtu12b@'){
            setMessage("Correct!");
        } else {
            setMessage("Incorrect!");
        }
    };
    return(
        <div>
            <form onSubmit={HandleSubmit}>
                <h1>Login Form</h1>
                <label className='label1'>Email:</label>
                <input
                    value={email}
                    onChange={(event)=>setEmail(event.target.value)}
                    name="email"
                    type="email"
                    placeholder='username'
                />
                <br></br><br></br>
                <label className='label2'>Password:</label>
                <input
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                    name="password"
                    type="password"
                    placeholder='password'
                />
                <br></br><br></br>
                <button type="submit">Submit</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default LoginForm;