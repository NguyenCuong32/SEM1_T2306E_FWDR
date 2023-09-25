import { Outlet, Link } from "react-router-dom";
import './mycss.css'
const Layout =() =>{
    return (
        <div className="flex-container1">
        <nav className="nav-list">
             <Link to="/Table" className="item1">Product</Link>
            <Link to="/User" className="item2">User Information</Link>
        </nav>
        <Outlet />
        </div>
  )
};

export default Layout;