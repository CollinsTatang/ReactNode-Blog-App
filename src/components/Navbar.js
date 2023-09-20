import React from "react";
import { Link } from 'react-router-dom';
import '../css/Navbar.css'

const Navbar = () => {
    return(
        <div>
            <div className="navbar">
                <div>
                    <Link className="link" to="/">
                        <h1 className="logo-style">tech</h1>
                    </Link>
                </div>
                <div className="links">
                    <Link className="link" to="/">
                        <h6>Home</h6>
                    </Link>
                    <Link className="link" to="/post">
                        <h6>Post</h6>
                    </Link>
                    <Link className="link" to="/about">
                        <h6>About</h6>
                    </Link>
                    <Link className="link" to="/login">
                        <h6>Login</h6>
                    </Link>
                    <Link className="link" to="/register">
                        <h6>Register</h6>
                    </Link>
                    <span>john</span>
                    <span>logout</span>
                    <span className="write">
                        <Link className="link" to="./write">Write</Link>
                    </span>
                </div>
            </div>
        </div>
            
    )
}
export default Navbar;
