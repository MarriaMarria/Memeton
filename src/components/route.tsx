import React from 'react';
import App from '../App'
import Navbar from './navbar'

import { Route, Switch } from 'react-router-dom';
import LoginForm from './login_register_form';
import All_meme from './all_meme';
import Add_meme from './add_meme'
import RegisterForm from './register';

export const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={LoginForm} />  
                <Route exact path="/register" component={RegisterForm} /> 
                <Route exact path="/all_meme" component={All_meme} /> 
                <Route exact path="/upload" component={Add_meme} />

            </Switch>
        </div>
    )
}