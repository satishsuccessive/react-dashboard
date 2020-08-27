import React from 'react';
import { Box, Typography, Badge } from '@stack-ui/components';

const Badges = () => {
return(
    <Box p="25px 43px 25px 25px" bgColor="#fff">
    <Typography className="header-title" as="h4">
    Badges
    </Typography>
    <Box pt="10px">
    <Typography as="p">
    Badges scale to match the size of the immediate parent element by using relative font sizing and em units.
    </Typography>
    </Box>
    <Box pt="25px" pb="35px">
    <Badge variant="primary">Primary</Badge>{' '}
    <Badge variant="secondary">Secondary</Badge>{' '}
    <Badge variant="success">Success</Badge>{' '}
    <Badge variant="danger">Danger</Badge>{' '}
    <Badge variant="warning">Warning</Badge> <Badge variant="info">Info</Badge>{' '}
    <Badge variant="light">Light</Badge> <Badge variant="dark">Dark</Badge>
    </Box>
    <Box>
    <h1>
    Example heading <Badge variant="secondary">New</Badge>
  </h1>
  <h2>
    Example heading <Badge variant="secondary">New</Badge>
  </h2>
  <h3>
    Example heading <Badge variant="secondary">New</Badge>
  </h3>
  <h4>
    Example heading <Badge variant="secondary">New</Badge>
  </h4>
  <h5>
    Example heading <Badge variant="secondary">New</Badge>
  </h5>
  <h6>
    Example heading <Badge variant="secondary">New</Badge>
  </h6>
    </Box>
    </Box>
)
}
export default Badges;