import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Router/privateRoute";
import { SignIn } from "./pages/signIn";
import { Dashboard } from "./modules/dashboard";
import Register from "./pages/register/Register";
import RecoverPassword from "./pages/recoverPassword/RecoverPassword";
import Error from "./pages/error/Error";
import { HeaderWrapper } from './modules/header';
import Logout from "./pages/logout/Logout";
import ConfirmMail from "./pages/confirmMail/ConfirmMail";
import GeneralUi from "./modules/dashboard/components/generalUi/GeneralUi";
import InternalServerError from "./pages/internalServerError/InternalServerError";

class Routes extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/react-dashboard">
          {/* <SignIn /> */}
          <Dashboard/>
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/recover-password">
            <RecoverPassword />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route exact path="/confirm-mail">
            <ConfirmMail />
          </Route>
          <Route exact path="/internal500">
            <InternalServerError />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard isGeneralUi={false} />
          </PrivateRoute>
          <Route exact path="/general-ui" >
          <Dashboard isGeneralUi />
          </Route>
          <Route path="*">
          <Error />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default Routes;
