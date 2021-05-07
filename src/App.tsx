import React, { useState } from 'react';
import Navbar from "./components/navbar";
import './App.css';
import './navbar.css';
import Body from "./components/meme";
import './body.css';
import Button from "./components/button";
import Login_register_form from "./components/login_register_form"
import { Link } from 'react-router-dom';


function App() {

    return (
        <div className="App">

            <Body />
            <Link to={{ pathname: "/login", state: {isRegistration:false} }}><Button buttonText="Login" /></Link>
            <Link to={{ pathname: "/register", state: {isRegistration:true} }}><Button buttonText="Register"/></Link>
            {/* <Login_register_form /> */}

        </div>
    );
}





export default App;