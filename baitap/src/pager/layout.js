import { Outlet, Link } from "react-router-dom";
import '../App.css'
const layout = () => {
    return (
        <nav className="Layout">
            <Link className="product" to="/product">Product</Link>
            <Link className="userimformation" to="/userimformation">User information</Link>
        </nav>
    )
};
export default layout;