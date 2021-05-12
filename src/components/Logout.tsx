import axios from 'axios'
import React, { useContext } from 'react'
import AuthContext from "./AuthContext"
import {useHistory} from "react-router-dom"

function Logout() {

    const {getLoggedIn} = useContext(AuthContext)

    const history = useHistory();

    async function logOut(){
        await axios.get("https://memeton-back.azurewebsites.net/logout");
        await getLoggedIn();
        //Redirection vers la page d'accueil
        history.push("/")
    }
    return (
        <div onClick = {logOut}>Logout</div>
    )
}

export default Logout;
