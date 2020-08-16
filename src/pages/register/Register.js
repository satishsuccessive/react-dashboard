import React from "react";
import {
  InputGroup,
  Button,
  Box,
  Typography,
  Image,
} from "@stack-ui/components";
import { SIGN_IN_LOGO } from "../../utils/constant";
import { Link } from "react-router-dom";

class Register extends React.PureComponent {
  render() {
    return (
      <Box
        pt="70px"
        style={{
          background: "url('/images/bg-pattern.png') no-repeat center",
          backgroundSize: "cover",
        }}
      >
        <Box width="31.4%" ml="auto" mr="auto">
          <Box bgColor="#fff" p="35px 0">
            <Box p="0 35px" mb="35px">
              <Box mb="26px" textAlign="center">
                <Image width="73px" src={SIGN_IN_LOGO} alt="signLogo" />
              </Box>
              <Box width="72%" m="auto">
                <Typography as="span" color="#98a6ad" textAlign="center">
                Don't have an account? Create your free account now
                </Typography>
              </Box>
            </Box>
            <Box
              bgColor="#f7fafb"
              borderTop="1px solid #ecf2f4"
              borderBottom="1px solid #ecf2f4"
              p="12px 35px"
            >
              <Typography
                textAlign="center"
                color="#414d5f"
                isBold
                type="subHeading"
                as="h4"
              >
              CREATE ACCOUNT
              </Typography>
            </Box>
            <Box p="35px 35px">
            <Box mb="25px">
            <InputGroup
              labelText="Full Name"
              type="text"
              placeholder="Enter your name"
            />
          </Box>
              <Box mb="25px">
                <InputGroup
                  labelText="Email address"
                  type="email"
                  placeholder="Enter your email"
                />
              </Box>
              <Box mb="25px">
                <InputGroup
                  labelText="Password"
                  type="password"
                  placeholder="Enter your password"
                />
              </Box>
              <Button
                size="lg"
                btnType="danger"
                btnVariant="contained"
                block="true"
                onClick={console.log('clicked')}
              >
                Sign Up
              </Button>
            </Box>
            <Typography as="span" textAlign="center">
              Sign in with
            </Typography>
          </Box>
          <Box m="20px 0" textAlign="center">
            <Link to="/recover-password">Sign up using</Link>
          </Box>
          <Box mb="100px">
          <Typography as="span" textAlign="center">
          Already have account? <Link to="/">Sign In</Link>
          </Typography>
          </Box>
          <Box mb="20px">
          <Typography as="span" textAlign="center">
          2019 © Upvex theme by <Link to="/">Coderthemes</Link>
          </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}
export default Register;
