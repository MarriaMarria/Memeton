import * as React from "react";
import { Link } from "react-router-dom"
import Button from "./button"

import './CSS/navbar.css'

export default function Navbar() {
    return (
        <nav className="container-nav">
            <h3>MEMETON</h3>
            <div className="userButtons">
                <Link to={{ pathname: "/login", state: {isRegistration:false} }}><Button buttonText="Login" /></Link>
                <Link to={{ pathname: "/register", state: {isRegistration:true} }}><Button buttonText="Register" /></Link>
            </div>

        </nav>
        
    )

}

// through router: if path.name/home => show login / register, otherwise hide it