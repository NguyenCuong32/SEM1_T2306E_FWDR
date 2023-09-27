import { Link,Outlet } from "react-router-dom";
import './baitap.css';
function Layout(){
    return(
      <nav>
        <Link to='/product' className="Product">Product</Link>
        <Link to='/Userinformation' className="User">User Information</Link>
        <Outlet></Outlet>
      </nav>
    );
   
}
export default Layout;