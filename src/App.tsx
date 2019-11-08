import React from 'react';
import './App.css';
import FullWidthTabs from './shared/components/TabView';
import { Container } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ButtonAppBar from './modules/NavBar';
import SearchResults from './modules/searchResults';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Container className="main-container">
          <ButtonAppBar />
          <Switch>
            <Route exact path="/">
              <FullWidthTabs />
            </Route>
            <Route path="/searchResults">
              <SearchResults />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
