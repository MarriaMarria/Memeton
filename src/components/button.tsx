import React from 'react'
import './CSS/button.css'


export default function Button(props: any) {    // we tell him that we will pass him a props onLogin

    const buttonText = props.buttonText; // I tell what I want I want as props
    console.log(props);
    
    return (

        <button className="buttonGlowOnHover" type="submit">{buttonText}</button>
        
    )
}
