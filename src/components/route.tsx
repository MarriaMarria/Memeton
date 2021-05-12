import React from 'react';
import App from '../App'
import Navbar from './navbar'

import { Route, Switch } from 'react-router-dom';
import Login_register_form from './login_register_form';
import Register_form from './register';
import All_meme from './all_meme';
import { AuthContextProvider } from './AuthContext';
import Logout from './Logout';
import UploadPage from "./add_meme"

export const Routes = () => {
    return (
        <div>
            <AuthContextProvider>
            <Navbar />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={Login_register_form} />  
                <Route exact path="/register" component={Register_form} /> 
                <Route exact path="/all_meme" component={All_meme} /> 
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/upload" component={UploadPage} />
            </Switch>
            </AuthContextProvider>
        </div>
    )
}