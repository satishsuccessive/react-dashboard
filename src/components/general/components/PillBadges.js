import React from 'react';
import { Box, Typography, Badge } from '@stack-ui/components';

const PillBadges = () => {
return (
    <Box p="25px 43px 25px 25px" bgColor="#fff">
    <Typography className="header-title" as="h4">
    Pill Badges
    </Typography>
    <Box pt="10px">
    <Typography as="p">
    Use the pill modifier props to make badges more rounded.
    </Typography>
    </Box>
    <Box pt="25px" pb="35px">
    <Badge pill variant="primary">
        Primary
    </Badge>{' '}
    <Badge pill variant="secondary">
        Secondary
    </Badge>{' '}
    <Badge pill variant="success">
        Success
    </Badge>{' '}
    <Badge pill variant="danger">
        Danger
    </Badge>{' '}
    <Badge pill variant="warning">
        Warning
    </Badge>{' '}
    <Badge pill variant="info">
        Info
    </Badge>{' '}
    <Badge pill variant="light">
        Light
    </Badge>{' '}
    <Badge pill variant="dark">
        Dark
    </Badge>
    </Box>
    <Box>
    <h1>
    Example heading <Badge pill variant="primary">New</Badge>
  </h1>
  <h2>
    Example heading <Badge pill variant="secondary">New</Badge>
  </h2>
  <h3>
    Example heading <Badge pill variant="success">New</Badge>
  </h3>
  <h4>
    Example heading <Badge pill variant="danger">New</Badge>
  </h4>
  <h5>
    Example heading <Badge pill variant="warning">New</Badge>
  </h5>
  <h6>
    Example heading <Badge pill variant="light">New</Badge>
  </h6>
    </Box>
    </Box>
)
}
export default PillBadges;