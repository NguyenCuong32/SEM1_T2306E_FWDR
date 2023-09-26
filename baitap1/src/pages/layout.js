import { Outlet, Link } from "react-router-dom";
const layout=()=>{
    return(
        <nav>
            <Link to="/Home">Home   </Link>
            <Link to="/Users">Users </Link>
            <Link to="/About">About Us  </Link>
            <Outlet/>
        </nav>
    )
};
export default layout;