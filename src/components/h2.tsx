import React from 'react'
import './CSS/h2.css'


export default function H2(props: any) {    // we tell him that we will pass him a props onLogin

    const h2Text = props.h2Text; // I tell what I want I want as props
    console.log(props);
    
    return (

        <h2 className="loginOrRegister">{h2Text}</h2>
        
    )
}
