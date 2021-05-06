import React from 'react'
// import 'button.css'



export default function Button(props: {onLogin: any}) {    // we tell him that we will pass him a props onLogin

    const toggle_login = (isLogin: boolean) => {
    
        props.onLogin(isLogin); 
        
    }

    

    return (
        <div className="Buttons">
            <button className="buttonUpload" onClick={() => toggle_login(true)}>Login</button>
            <button className="buttonRegister" onClick={() => toggle_login(false)}>Register</button>
        </div>
    )
}
// when Login is pressed the function receives onLogin = true; the parent will catch info with event listener onLogin
