import { Outlet, Link } from "react-router-dom";
import '../css/layout.css';

const layout = ()=>{
    return(
        <nav className='layout'>
            <Link className='space' to ="/home">Home</Link>
            <Link className='space' to ="/user">User</Link>
            <Link className='space' to ="/about">About Me</Link>
            <Outlet /> 
        </nav>
    )
};

export default layout;