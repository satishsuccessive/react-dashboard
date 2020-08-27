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

class ConfirmMail extends React.PureComponent {
  render() {
    return (
      <Box
        pt="70px"
        className="bg-height"
        style={{
          background: "url('/images/bg-pattern.png') no-repeat center",
          backgroundSize: "cover",
        }}
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
              Success !
                </Typography>
              </Box>
              <Box mb="40px">
              <Typography as="span" color="#98a6ad" textAlign="center">
              A email has been send to youremail@domain.com. Please check for an email from company and click on the included link to reset your password.
                </Typography>
                </Box>
                <Link to="/">
                <Button
                size="lg"
                btnType="danger"
                btnVariant="contained"
                block="true"
                onClick={console.log('confirm email')}
              >
                Back to Home
              </Button>
              </Link>
            </Box>

          </Box>
          <Box mb="20px">
          <Typography as="span" color="#98a6ad" textAlign="center">
          2019 © Upvex theme by <Link to="/">Coderthemes</Link>
          </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}
export default ConfirmMail;
