import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-center">
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Rooms</Link>
                    </li>
                    <li>
                        <Link to="/">Locations</Link>
                    </li>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/">Register</Link>
                    </li>

                </ul>

            </div>
        </div>


    );
}

export default Navbar;
