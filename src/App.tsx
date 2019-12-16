import React from 'react';
import './App.css';
import Layout from './pages/layout/standard_layout';
import { BrowserRouter } from 'react-router-dom';


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
}

export default App;
