import React from 'react';
import { Box, Card, RadialProgressBar, Icon } from '@stack-ui/components';
import { cardDetails } from './config';
import { Typography } from '@stack-ui/components/dist/cjs/components/Typography';

class UpdateAverage extends React.PureComponent {
  render() {
    return (
      <Box display="flex">
        {
          cardDetails.map(items => (
            <Box p="10px" width="25%" mb="10px">
              <Card>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb="15px">
                <Typography as="paragraph" isBold>{items.title}</Typography>
                <Icon size="16" icon="layout-linear"></Icon>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <RadialProgressBar
                    strokeColor={items.strokeColor}
                    strokeWidth="5"
                    sqsize="72"
                    percentage={items.percentage}
                  />
                  <Box display="flex" flexDirection="column" justifyContent="flex-end" alignItems="flex-end">
                    <Typography as="h1" isBold>{items.count}</Typography>
                    <span>{items.last}</span>
                  </Box>
                </Box>
              </Card>
            </Box>
          ))
        }
      </Box>
    )
  }
}
export default UpdateAverage;