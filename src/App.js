import React from 'react';
import './global.css'
import { Dashboard } from './modules/dashboard';
import { Header } from './modules/header';


class App extends React.PureComponent {
  render() {
    return (
      <>
       <Header />
        <Dashboard />
      </>
    );
  }
}

export default App;
