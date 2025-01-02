import "react";
import { Link } from "react-router-dom";
var NavBar=()=>{
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/UseEffect">UseEffect</Link></li>
                    <li><Link to="/UseRef">USeRef</Link></li>
                    <li><Link to="/UseContext">USeContext</Link></li>
                    <li><Link to="/UseMemo">USeMemo</Link></li>
                    <li><Link to="/Gallery">Gallery</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar;