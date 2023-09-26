import { Outlet, Link } from "react-router-dom";
import  './App1.css';
const layout = ()=>{
    return(
     <>
     <header>
     <div className="flex-container">
           <Link id="flex-item1" to="/home">Home</Link>
            <Link id="flex-item1" to="/user">User</Link>
            <Link id="flex-item1" to="/about">About me</Link>
            <Outlet />
        </div>
    </header>
        </> 
    )
};

export default layout;