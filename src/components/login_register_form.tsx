import React from 'react';
import axios from "axios";
import Button from "./button"

type userInfo = {
    username: String;
    password: String;
    password_verified: String;
};


export default function Login_register_form(props: any) {

    
    const isRegistration: boolean = props.location.state.isRegistration;
    // state works as props, so we pass it to our link;
    // ! props.location.state.... => how I pass the data via router


    const expanded_form = () => {
        if (isRegistration === true) {
            return (

                <div>
                    <label htmlFor="email">Verify password </label>
                    <input type="text" name="password" id="password"  required />

                </div>

            )
        } else {
            return null
        }
    }
    const html_element = (
        <form action="" method="get">



            <div>
                <label htmlFor="name">Username </label>
                <input type="text" name="username" id="username" required />
            </div>
            <div>
                <label htmlFor="email">Password </label>
                <input type="password" name="password" id="password" required />
            </div>


            {expanded_form()}
            <div>
                <Button buttonText="Submit" />
            </div>
        </form>

    )

    return html_element

}