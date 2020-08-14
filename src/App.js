import React from "react";
import "./global.css";
import { Dashboard } from "./modules/dashboard";
import { HeaderWrapper } from "./modules/header";
import { SignIn } from "./pages/signIn";
import Routes from "./Routes";

class App extends React.PureComponent {
  render() {
    return <Routes />;
  }
}

export default App;
