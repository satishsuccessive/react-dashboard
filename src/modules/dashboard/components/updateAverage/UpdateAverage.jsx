import React from 'react';
import { Box, Card, RadialProgressBar } from '@stack-ui/components';
import { cardDetails } from './config';

class UpdateAverage extends React.PureComponent {
  render() {
    return (
      <Box display="flex">
        {
          cardDetails.map(items => (
            <Box p="10px" style={{ width: "23%" }}>
              <Card>
                <Box><h3>{items.title}</h3></Box>
                <Box display="flex" justifyContent="space-between">
                  <RadialProgressBar
                    variant={items.variant}
                    strokeWidth="5"
                    sqsize="64"
                    percentage={items.percentage}
                  />
                  <Box display="flex" flexDirection="column" justifyContent="flex-end" alignItems="flex-end">
                    <strong>{items.count}</strong>
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