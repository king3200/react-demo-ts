import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardPage from './dashboard/dashboard';
import CurdPage from './curd/curd';
import AboutPage from './about/about';

const Routes = () => {
    return (
        <Switch>
            <Route path="/menu/dashboard" component={DashboardPage} />
            <Route path="/menu/curd" component={CurdPage} />
            <Route path="/menu/about" component={AboutPage} />
        </Switch>
    );
}

export default Routes;