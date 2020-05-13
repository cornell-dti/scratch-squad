import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Scratch from './pages/Scratch';

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
      </Switch>
    </Router>
  );
}

export default App;
