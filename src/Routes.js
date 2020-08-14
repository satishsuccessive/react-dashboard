
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './Router/privateRoute';
import { SignIn } from './pages/signIn';
import Error from './pages/error/Error';
import { HeaderWrapper } from './modules/header';
import { Dashboard } from './modules/dashboard';

class Routes extends React.PureComponent {
    render(){
        return (
            <Router>
            <Switch>
            <Route path="/signIn">
            <SignIn />
          </Route>
            <PrivateRoute
                path="/k"
                
              >
              <Error />
              </PrivateRoute>
              <Route
                exact path="/"
                >
                <HeaderWrapper />
                <Dashboard />
                </Route>
            </Switch>
          </Router>
        )
    }
}
export default Routes;