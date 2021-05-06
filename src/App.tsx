import React, { useState } from 'react';
import Navbar from "./components/navbar";
import './App.css';
import './navbar.css';
import Body from "./components/body";
import './body.css';
import Button from "./components/button";
import Login_register_form from "./components/login_register_form"


function App() {

    let coucou = "Hello, is it me you looking for" // just checking
    let clickRegistration = true;
    
    const changeClickRegistration = (value: boolean) => {
        clickRegistration = value;
        console.log(clickRegistration) // to check if he sees true/false
    }

    return (
        <div className="App">

            <Body />
            <Button onLogin={changeClickRegistration}/>
                <div>
                    { clickRegistration }
                    { coucou }
                </div>
            <Login_register_form isRegistration={clickRegistration}/>

        </div>
    );
}



export default App;