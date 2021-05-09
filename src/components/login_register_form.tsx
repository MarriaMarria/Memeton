import React from 'react';
import axios from "axios";
import Button from "./button"
import './CSS/login_register_form.css'
import H2 from "./h2"
import ButtonHome from './btnBackHome'

type userInfo = {
    username: String;
    password: String;
    password_verified: String;
};


export default function Login_register_form(props: any) {

    
    const isRegistration: boolean = props.location.state.isRegistration;
    // state works as props, so we pass it to our link;
    // ! props.location.state.... => how I pass the data via router


    // const expanded_form = () => {
        if (isRegistration === true) {
            return (
                
                <div>

                <div className="container">
                    <H2 h2Text="Login"/>
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
                            {/* <ButtonHome btnHomeText="Back home" /> */}
                        </div>
    
                    </form>
                </div>
    
    
            
            </div>
            )
            
        

            
        } else {
            return (
            <div>

            <div className="container">
                <H2 h2Text="Login"/>
                <form>
                    <label htmlFor="name">Username </label>
                    <input type="text" name="username" id="username" required />
                </form>
                <form>
                    <label htmlFor="email">Password </label>
                    <input type="password" name="password" id="password" required />

                    <div>
                        <Button buttonText="Submit" />
                    </div>

                </form>
            </div>


        
        </div>
        )
        }
    }
