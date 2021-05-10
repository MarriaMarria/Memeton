import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './components/CSS/App.css';
import Home from "./components/home"
import axios from "axios";

//Permettre à mes cookies d'etre recupérés depuis le back
axios.defaults.withCredentials = true;




function App() {

    return (
        <div className="App">

            <Home />

        </div>
    );
}





export default App;