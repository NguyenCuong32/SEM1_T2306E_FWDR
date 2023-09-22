import {Outlet,Link} from 'react-router-dom'
import './layout.css'

const Layout = ()=>{
    return(
        <nav className='nav'>
            <Link className='Product link' to="/Product">Product</Link>
            <Link className='Uesr link' to="/User">UserInformation</Link>
            <Outlet></Outlet>
        </nav>
    )
};
export default Layout ;