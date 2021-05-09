import React from 'react'
import './CSS/btnHome.css'


export default function ButtonHome(props: any) {    // we tell him that we will pass him a props onLogin

    const btnHomeText = props.btnHomeText; // I tell what I want I want as props
    // console.log(props);
    
    return (

        <button className="btnBackHome" type="button">{btnHomeText}</button>
        
    )
}
