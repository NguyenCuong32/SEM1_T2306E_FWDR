import { Outlet, Link } from "react-router-dom";
import './layout.css'

const layout = ()=>{
    return(
        <nav className="navLayout">
             <Link to="/home" className="layout">Home</Link>
            <Link to="/user" className="layout">User</Link>
            <Link to="/about" className="layout">About Me</Link>
            <Outlet />
            </nav>
           
        
    )
};

export default layout;