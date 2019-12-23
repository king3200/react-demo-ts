import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './pages/login/login';
import StandardLayout from './pages/layout/standard_layout';
import RegistPage from './pages/login/regist';
import { Provider } from 'react-redux';
import configureStore from './store';
import { mySaga } from './reducers/sagas';

const store = configureStore();
store.runSaga(mySaga);

const App: React.FC = () => {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default App;
