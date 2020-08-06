import React from 'react';
import './global.css'
import { Dashboard } from './modules/dashboard';
import { HeaderWrapper } from './modules/header';


class App extends React.PureComponent {
  render() {
    return (
      <>
       <HeaderWrapper />
        <Dashboard />
      </>
    );
  }
}

export default App;
