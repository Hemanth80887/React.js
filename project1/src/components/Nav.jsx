import React from "react";
import { Link } from "react-router-dom"; 

function Nav() {
    return(
        <div className="d-flex gap-3 ">
            <Link to='/home' className="nav-links">Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Contact'>Contact</Link>

        </div>
    )
    
}
export default Nav