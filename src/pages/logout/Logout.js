import React from "react";
import {
  InputGroup,
  Button,
  Box,
  Typography,
  Image,
  Icon
} from "@stack-ui/components";
import { SIGN_IN_LOGO } from "../../utils/constant";
import { Link } from "react-router-dom";

class Logout extends React.PureComponent {
  render() {
    return (
      <Box
        pt="70px"
        className="bg-height"
        bgImg="url('/images/bg-pattern.png')"
      >
        <Box width="31.4%" ml="auto" mr="auto">
          <Box bgColor="#fff" p="35px 0" mb="25px">
            <Box p="0 35px" mb="35px">
              <Box mb="52px" textAlign="center">
              <Link to="/"><Image width="73px" src={SIGN_IN_LOGO} alt="signLogo" /></Link>
              </Box>
              <Box textAlign="center" mb="34px">
              <Icon size="100" color="#4bd396" icon="tick-circle" />
              </Box>
              <Box  m="12px">
              <Typography as="h2" textAlign="center">
              See you again !
                </Typography>
              </Box>
              <Typography as="span" color="#98a6ad" textAlign="center">
                You are now successfully sign out.
                </Typography>
            </Box>

          </Box>
          <Box mb="100px" pt="10px" textAlign="center">
          <Typography as="span" color="#98a6ad">
          Back to <Link to="/">Log In</Link>
          </Typography>
          </Box>
          <Box mb="20px">
          <Typography as="span" className="footerStyle" color="#98a6ad" textAlign="center">
          2019 © Upvex theme by <Link to="/">Coderthemes</Link>
          </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}
export default Logout;
