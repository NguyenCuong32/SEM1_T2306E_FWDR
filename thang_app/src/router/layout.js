import { Outlet,Link} from "react-router-dom";
import './layout.css'
const Layout = ()=>{
    return(
        <nav>
            <Link className="link-layout" to='/home'>home</Link>
            <Link className="link-layout" to='/user'>user</Link>
            <Link className="link-layout" to='/table'>table</Link>
            <Outlet />
        </nav>  
    )
};
export default Layout;