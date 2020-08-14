import React from "react";
import { withRouter } from "react-router";
import { StackInputGroup, Button, Box, Typography, Image } from "@stack-ui/components";
import { SIGN_IN_LOGO } from '../../utils/constant';
import Auth from "../../Router/Auth";

class SignIn extends React.PureComponent {
  signIn = () => {
    const { location, history } = this.props;
    let { from } = location.state || { from: { pathname: "/k" } };
    Auth.authenticate(() => {
      history.replace(from);
    });
  };
  render() {
    return (
      <Box style={{width: "31.4%"}} ml="auto" mr="auto">
        <Box mb="26px" style={{textAlign: "center"}}>
        <Image width= "73px" src={SIGN_IN_LOGO} alt="signLogo" />
        </Box>
        <Typography>
          Enter your email address and password to access admin panel.
        </Typography>
        <Button
          btnType="primary"
          btnVariant="contained"
          block="true"
          onClick={this.signIn}
        >
          {" "}
          Block Button{" "}
        </Button>
        </Box>
    );
  }
}
export default withRouter(SignIn);
