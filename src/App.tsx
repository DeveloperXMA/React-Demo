import React from 'react';
import './App.css';
import FullWidthTabs from './shared/components/TabView';
import { Container } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div className="App">
      <Container>
        <FullWidthTabs />
      </Container>
    </div>
  );
}

export default App;
