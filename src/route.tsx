import React from 'react';
import App from './App'
import Navbar from './components/navbar'

import { Route, Switch } from 'react-router-dom';
import Login_register_form from './components/login_register_form';

export const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={Login_register_form} />  //* I will change app to Login */
                <Route exact path="/register" component={Login_register_form} />  //* I will change app to Login */
            </Switch>
        </div>
    )
}