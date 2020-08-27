import React from "react";
import {
  Box,
  Typography,
  StyledBreadcum,
  Breadcum,
} from "@stack-ui/components";

const BreadCrumbs = () => {
  return (
    <Box p="25px 43px 25px 25px" bgColor="#fff">
      <Typography className="header-title" as="h4">
        Breadcrumb
      </Typography>
      <Box pt="10px" pb="25px">
        <Typography as="p">
          Indicate the current page’s location within a navigational hierarchy.
        </Typography>
      </Box>
      <Box>
        <Breadcum>
          <StyledBreadcum.Item active>Home</StyledBreadcum.Item>
        </Breadcum>
      </Box>
      <Box>
        <Breadcum>
          <StyledBreadcum.Item href="#">Home</StyledBreadcum.Item>
          <StyledBreadcum.Item active>Library</StyledBreadcum.Item>
        </Breadcum>
      </Box>
      <Box>
        <Breadcum>
          <StyledBreadcum.Item href="#">Home</StyledBreadcum.Item>
          <StyledBreadcum.Item href="#">Library</StyledBreadcum.Item>
          <StyledBreadcum.Item active>Data</StyledBreadcum.Item>
        </Breadcum>
      </Box>
    </Box>
  );
};
export default BreadCrumbs;
