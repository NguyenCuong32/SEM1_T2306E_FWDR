import {Link,Outlet} from 'react-router-dom'
import './layout.css'
const layout = ()=>{
    return(         
        <div className='a'>
        <Link className='pr' to='/product'>Product</Link>
        <Link className='user1' to='/user'>User information</Link>
        <Link className='table1' to='/table'>Table</Link>
        <Outlet />
        </div>
    )
};
export default layout;