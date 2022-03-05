import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="nav">
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Massages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Setting</a>
            </div>
        </nav>
    )
}

export default Navbar;