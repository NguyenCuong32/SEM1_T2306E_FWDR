import {Facebook,Instagram} from "react-bootstrap-icons";
import "./page.css";
export default function Footer(){
    return(
        <footer className="footer">
            <address>Address: No 8, Ton That Thuyet</address>
            <div className="icon">
                <a className="facebook" href="/" >{<Facebook/>}</a>
                <a className="instagram" href="/" ><Instagram/></a>
            </div>
        </footer>
    );
    
}