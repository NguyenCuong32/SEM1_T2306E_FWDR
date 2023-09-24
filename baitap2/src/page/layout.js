import { Outlet,Link } from "react-router-dom";
import "./page.css";
 

export default function Layout(){
    return (
        <>
            <nav className="navigate">
                <Link className="nav1" to="/" >Page</Link>
                <Link className="nav2" to="/user" >User Informaton</Link>
            </nav>
            <Outlet/>
        </>
    );
}
