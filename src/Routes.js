import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Router/privateRoute";
import { SignIn } from "./pages/signIn";
import { HeaderWrapper } from "./modules/header";
import { Dashboard } from "./modules/dashboard";

class Routes extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <PrivateRoute path="/dashboard">
            <HeaderWrapper />
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    );
  }
}
export default Routes;
