import React , {useState, useContext} from 'react';
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


export default function Register_form() {

    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory();

    // state works as props, so we pass it to our link;
    // ! props.location.state.... => how I pass the data via router
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password_verified, setPasswordVerify] = useState("");

    async function register_func(e:any){

        e.preventDefault();
        try {
            //Ce sont les variables que mon back connait
            const registerData = {
                username,
                password,
                password_verified
            };

            //Requete post au back qui sera changé pour le lien Azure
            await axios.post("http://localhost:3000/register", registerData);
            await getLoggedIn();           
            history.push("/");

        } catch (err:any) {
            console.error(err)           
        }

    } 

    // const expanded_form = () => {
            return (
                

                <div className="container">
                    {/* <H2 h2Text="Login"/> */}
                    {/* { isRegistration ? <H2 h2Text="Login"/> }
                    isRegistered ? <H2 h2Text="Register"/>:  <H2 h2Text="Login"/> */}
                    <h2 className="formH2">Register</h2>
                    <form onSubmit={register_func}>
                        <label htmlFor="name">Username </label>
                        <input type="text" name="username" id="username"  
                        onChange={(e) => setUsername(e.target.value)}
                                                //Je met la value dans une variable "username" qui a été déclaré plus haut
                        value={username} required/>
                    </form>
                    
                    <form onSubmit={register_func}>
                        <label htmlFor="password">Password </label>
                        <input type="password" name="password" id="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password} required />
                    </form>
                    
                    <form onSubmit={register_func}>
                        <label htmlFor="verify pwd">Verify password </label>
                        <input type="password" name="password" id="password"  
                        onChange={(e) => setPasswordVerify(e.target.value)}
                        value={password_verified} 
                        required />
                    </form>
                    
                    <form onSubmit={register_func}>
                        <div>
                            <Button buttonText="Submit" />
                            <Link to={{ pathname: "/"}}><ButtonHome btnHomeText="Back home" /></Link>
                        </div>
    
                    </form>
                </div>
        
            )
            
 
    } 
    
