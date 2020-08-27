import React from "react";
import {
  Box,
  Typography,
  StyledBreadcum,
  Breadcum,
} from "@stack-ui/components";

const Pagination = () => {
  return (
    <Box p="25px 43px 25px 25px" bgColor="#fff">
      <Typography className="header-title" as="h4">
      Pagination
      </Typography>
      <Box pt="10px" pb="25px">
        <Typography as="p">
        Provide pagination links for your site or app with the multi-page pagination component.
        </Typography>
      </Box>
    </Box>
  );
};
export default Pagination;
