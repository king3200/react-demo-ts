import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './pages/login/login';
import StandardLayout from './pages/layout/standard_layout';
import RegistPage from './pages/login/regist';


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' children={<LoginPage />} />
                <Route path='/regist' children={<RegistPage />} />
                <Route path='/menu' children={<StandardLayout />} />
                <Route path='/'>
                    <Redirect to={{ pathname: '/login' }} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
