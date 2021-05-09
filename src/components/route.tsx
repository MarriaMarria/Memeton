import React from 'react';
import App from '../App'
import Navbar from './navbar'

import { Route, Switch } from 'react-router-dom';
import Login_register_form from './login_register_form';
import All_meme from './all_meme';

export const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={Login_register_form} />  
                <Route exact path="/register" component={Login_register_form} /> 
                <Route exact path="/all_meme" component={All_meme} /> 

            </Switch>
        </div>
    )
}