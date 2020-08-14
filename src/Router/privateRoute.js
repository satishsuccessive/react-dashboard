import React from "react";
import { Redirect, Route } from "react-router-dom";
import Auth from "./Auth";

class PrivateRoute extends React.PureComponent {
  render() {
    const { children, ...rest } = this.props;
    return (
      <>
        <Route
          {...rest}
          render={({ location }) =>
            Auth.isAuthenticated ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/signIn",
                  state: { from: location },
                }}
              />
            )
          }
        />
      </>
    );
  }
}
export default PrivateRoute;
