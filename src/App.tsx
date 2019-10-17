import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.scss';
import HomePage from './modules/homepage/home';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path='/'>
              <HomePage />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
