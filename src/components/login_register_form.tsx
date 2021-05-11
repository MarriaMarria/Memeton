import React , {useContext, useState} from 'react';
import axios from "axios";
import Button from "./button"
import './CSS/login_register_form.css'
import ButtonHome from './btnBackHome'
import { Link, useHistory } from "react-router-dom"
import AuthContext from './AuthContext';

type userInfo = {
    username: String;
    password: String;
    password_verified: String;
};


export default function Login_form() {

    // state works as props, so we pass it to our link;
    // ! props.location.state.... => how I pass the data via router
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory();
    
    async function login_func(e:any){

        e.preventDefault();
        try {
            //Ce sont les variables que mon back connait
            const loginData = {
                username,
                password,
            };

            //Requete post au back qui sera changé pour le lien Azure
            await axios.post("http://localhost:3000/login", loginData, {
                withCredentials: true
            })
            await getLoggedIn();
            
            history.push("/");


        } catch (err:any) {
            console.error(err)           
        }
    }  

        return (


            <div className="container">
                <h2 className="formH2">Login</h2>
                <form onSubmit={login_func}>
                    <label htmlFor="name">Username </label>
                    <input type="text" name="username" id="username" 
                    onChange={(e) => setUsername(e.target.value)}
                                            //Je met la value dans une variable "username" qui a été déclaré plus haut
                    value={username}
                    required />
                </form>
                <form onSubmit={login_func}>
                    <label htmlFor="password">Password </label>
                    <input type="password" name="password" id="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} 
                    required />

                    <div>
                        <Button buttonText="Submit" />
                        <Link to={{ pathname: "/"}}><ButtonHome btnHomeText="Back home" /></Link>
                    </div>
                </form>
            </div>
        )       
}
