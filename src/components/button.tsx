import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import 'button.css'


export default function Button(props: any) {    // we tell him that we will pass him a props onLogin

    const buttonText = props.buttonText; // I tell what I want I want as props
    console.log(props);
    
    return (
        <div>
            <button>{buttonText}</button>
        </div>
        
    )
}
