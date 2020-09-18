import React from 'react';
import { Box, Card, RadialProgressBar, Icon, Menu } from '@stack-ui/components';
import { cardDetails } from './config';
import { Typography } from '@stack-ui/components/dist/cjs/components/Typography';

class UpdateAverage extends React.PureComponent {
  render() {
    return (
      <Box display="flex">
        {
          cardDetails.map(items => (
            <Box p="10px" width="25%" mb="10px">
              <Card boxShadow="0 0.75rem 6rem rgba(56,65,74,.03)" cardMenu={<Menu btnType="menu" iconOption options={[{
                item: 'Action'
              }, {
                item: 'Another action'
              }, {
                item: 'Something else',
              }, {
                item: 'Seperated link',
              }]} />}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb="25px">
                <Typography as="h5" isBold>{items.title}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <RadialProgressBar
                    strokeColor={items.strokeColor}
                    strokeWidth="5"
                    sqsize="72"
                    percentage={items.percentage}
                  />
                  <Box display="flex" flexDirection="column" justifyContent="flex-end" alignItems="flex-end">
                    <Typography as="h3" isBold>{items.count}</Typography>
                    <Typography as="p" color="#98a6ad">{items.last}</Typography>
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