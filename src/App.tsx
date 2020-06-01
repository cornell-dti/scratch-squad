import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Scratch from './pages/Scratch';
import Business from './pages/Business';
import AppDev from './pages/AppDev';

library.add(fab);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/scratch">
          <Scratch />
        </Route>
        <Route exact path="/business">
          <Business />
        </Route>
        <Route exact path="/appdev">
          <AppDev />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
