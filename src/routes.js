import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Intro from './pages/Intro';

function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Intro} />
            <Route path='/portfolio' component={Intro} />
        </BrowserRouter>
    );
}

export default Routes;