import React from "react";
import {
  InputGroup,
  Button,
  Box,
  Typography,
  Image,
} from "@stack-ui/components";
import { ERROR_IMG } from "../../utils/constant";
import { Link } from "react-router-dom";

class Error extends React.PureComponent {
  render() {
    return (
      <Box
        pt="70px"
        className="bg-height"
        bgImg="url('/images/bg-pattern.png')"
      >
        <Box width="31.4%" ml="auto" mr="auto">
          <Box bgColor="#fff" p="35px 0">
            <Box p="0 35px">
              <Box mb="26px" textAlign="center">
                <Link to="/"><Image width="200px" src={ERROR_IMG} alt="Error" /></Link>
              </Box>
              <Box mb="30px">
              <Typography
                textAlign="center"
                color="#414d5f"
                isBold
                type="subHeading"
                as="h2"
              >
              PAGE NOT FOUND
              </Typography>
              </Box>
              <Box m="auto" width="93%">
                <Typography as="span" color="#98a6ad" textAlign="center">
                It's looking like you may have taken a wrong turn. Don't worry... it happens to the best of us. You might want to check your internet connection. Here's a little tip that might help you get back on track.
                </Typography>
              </Box>
            </Box>
            <Box p="35px 35px" textAlign="center">
            <Link to="/">
              <Button
                size="sm"
                btnType="danger"
                btnVariant="contained"
                onClick={console.log('clicked')}
                icon="airplane"
              >
                Return Home
              </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
export default Error;
