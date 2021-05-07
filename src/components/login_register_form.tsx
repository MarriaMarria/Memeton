import React from 'react';

export default function Login_register_form(props: any) {

    const isRegistration: boolean = props.location.state.isRegistration;
    // state works as props, so we pass it to our link
    
    const expanded_form = () => {
        if (isRegistration === true) {
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