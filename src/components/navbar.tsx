import React, {useContext} from "react";
import { Link } from "react-router-dom"
import Button from "./button"
import AuthContext from "./AuthContext"
import Logout from "./Logout"

import './CSS/navbar.css'

export default function Navbar() {

    const {loggedIn} = useContext(AuthContext);

    return (
        <nav className="container-nav">
            <h3>MEMETON</h3>
            {loggedIn === false && (
            <>
            <div className="userButtons">
                <Link to={{ pathname: "/login" }}><Button buttonText="Login" /></Link>
                <Link to={{ pathname: "/register"}}><Button buttonText="Register" /></Link>
            </div>
            </>)}
            {loggedIn === true && (
            <>
            <div className="buttonGlowOnHover">
            <span><Link to={{ pathname: "/logout" }}><Logout/></Link></span>
            </div>
            <div className="userButtons">
            <Link to={{ pathname: "/upload"}}><Button buttonText="Upload" /></Link>
            </div>
            </>)}

        </nav>        
    )
}

// through router: if path.name/home => show login / register, otherwise hide it