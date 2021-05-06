import React from 'react';

export default function Login_register_form(props: {isRegistration: boolean}) {

    // ! THE PROBLEM: pass with props from parent (page) to kid info about state of button; it is passed but only ONCE, and after it doesn't react to the change of boolean 
    
    const expanded_form = () => {
        if (props.isRegistration) {
            return (
                <div>
                    <div className="form-example">
                        <label htmlFor="name">Enter your name: </label>
                        <input type="text" name="name" id="name" required />
                    </div>
                    <div className="form-example">
                        <label htmlFor="email">Enter your email: </label>
                        <input type="email" name="email" id="email" required />
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
    const html_element = (
            <form action="" method="get" className="form-example" > 

                {expanded_form()}


                <div className="form-example">
                    <label htmlFor="name">Enter your username: </label>
                    <input type="text" name="name" id="name" required />
                </div>
                <div className="form-example">
                    <label htmlFor="email">Enter your password: </label>
                    <input type="email" name="email" id="email" required />
                </div>

            </form>

    )

    return html_element

}