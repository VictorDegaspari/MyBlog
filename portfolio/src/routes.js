import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About'
import Work from './Pages/Work'
import Contact from './Pages/Contact'

import Team from './Pages/Team';

function Routes() {
    return (
        <BrowserRouter>
        <Route path="/"  exact component={Home} />
        <Route path="/saibamais" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
     
        <Route path="/team" component={Team} />
       
    
        </BrowserRouter>
    );
}

export default Routes;