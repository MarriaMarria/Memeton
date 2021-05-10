import React from 'react';
import axios from "axios";
import Button from "./button"
import './CSS/login_register_form.css'
import ButtonHome from './btnBackHome'
import { Link } from "react-router-dom"

type userInfo = {
    username: String;
    password: String;
    password_verified: String;
};

export default function RegisterForm() {
    return (
                
    

        <div className="container">
        
            <h2 className="formH2">Register</h2>
            <form>
                <label htmlFor="name">Username </label>
                <input type="text" name="username" id="username" required />
        
        
                <label htmlFor="email">Password </label>
                <input type="password" name="password" id="password" required />
         
                <label htmlFor="verify pwd">Verify password </label>
                <input type="text" name="password" id="password"  required />
            </form>
                <div>
                    <Button buttonText="Submit" />
                    <Link to={{ pathname: "/"}}><ButtonHome btnHomeText="Back home" /></Link>
                </div>

        
        </div>
    
    )
}