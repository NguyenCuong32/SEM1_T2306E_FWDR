import { Outlet, Link } from "react-router-dom";
const Layout =() =>{
    return (
        <div className="user">
        <nav className="nav-list">
             <Link to="/">Home</Link>
            <Link to="/User">Users</Link>
            <Link to="/About">Contact</Link>
        </nav>
        <Outlet />
        </div>
  )
};

export default Layout;