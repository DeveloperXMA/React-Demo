import React from 'react';
import './App.css';
import FullWidthTabs from './shared/components/TabView';
import { Container } from '@material-ui/core';
import ButtonAppBar from './modules/NavBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Container>
      <ButtonAppBar/>
        <FullWidthTabs />
      </Container>
    </div>
  );
}

export default App;
