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


export default function Login_register_form(props: any) {

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [password_verified, setPasswordVerify] = useState("")


    const isRegistration: boolean = props.location.state.isRegistration;
    // state works as props, so we pass it to our link;
    // ! props.location.state.... => how I pass the data via router


    // const expanded_form = () => {
        if (isRegistration === true) {
            return (
                
                <div>

                <div className="container">
                    {/* <H2 h2Text="Login"/> */}
                    {/* { isRegistration ? <H2 h2Text="Login"/> }
                    isRegistered ? <H2 h2Text="Register"/>:  <H2 h2Text="Login"/> */}
                    <h2 className="formH2">Register</h2>
                    <form>
                        <label htmlFor="name">Username </label>
                        <input type="text" name="username" id="username" required />
                    </form>
                    <form>
                        <label htmlFor="email">Password </label>
                        <input type="password" name="password" id="password" required />
                    <form className="verifyPwd">
                        <label htmlFor="verify pwd">Verify password </label>
                        <input type="text" name="password" id="password"  required />
                    </form>
                        <div>
                            <Button buttonText="Submit" />
                            <Link to={{ pathname: "/"}}><ButtonHome btnHomeText="Back home" /></Link>
                        </div>
    
                    </form>
                </div>
            </div>
            )
            
 
        } else {
            return (
            <div>

            <div className="container">
                <h2 className="formH2">Login</h2>
                <form>
                    <label htmlFor="name">Username </label>
                    <input type="text" name="username" id="username" required />
                </form>
                <form>
                    <label htmlFor="email">Password </label>
                    <input type="password" name="password" id="password" required />

                    <div>
                        <Button buttonText="Submit" />
                        <Link to={{ pathname: "/"}}><ButtonHome btnHomeText="Back home" /></Link>
                    </div>

                </form>
            </div>


        
        </div>
        )
        }
    }
