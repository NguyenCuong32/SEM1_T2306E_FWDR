import { Outlet, Link } from "react-router-dom"
import '../App.css';
const Layout = () => {
    return (
        <nav className="nav">
            <Link className="home" to="/home">Home</Link>
            <Link className="user" to="/user">User</Link>
            <Link className="about" to="/about">About me</Link>
            <Link className="blog" to="/blog">Blog</Link>
            <Outlet/>
        </nav>
    )
}
export default Layout;