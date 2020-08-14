import React from "react";
import { withRouter } from "react-router";
import { InputGroup, Button, Box, Typography, Image } from "@stack-ui/components";
import { SIGN_IN_LOGO } from '../../utils/constant';
import Auth from "../../Router/Auth";

class SignIn extends React.PureComponent {
  signIn = () => {
    const { location, history } = this.props;
    let { from } = location.state || { from: { pathname: "/dashboard" } };
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
        <Box>
        <Typography as="p">
         <Box style={{fontSize: "13px" ,color: "#98a6ad", textAlign: "center"}}>Enter your email address and password to access admin panel.</Box>
        </Typography>
        </Box>
        <InputGroup size="md" labelText="Name" type="text" />
        <InputGroup size="sm" as="select" labelText="Input Select">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </InputGroup>
        <Box style={{textAlign: "center", color: "#414d5f", fontSize: "15px"}}><Typography isBold type="subHeading" as="h3">SIGN IN</Typography></Box>
        <Button
        size="lg"
          btnType="danger"
          btnVariant="contained"
          block="true"
          onClick={this.signIn}
        >
     Log In
        </Button>
        </Box>
    );
  }
}
export default withRouter(SignIn);
