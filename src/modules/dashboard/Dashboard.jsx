import React from 'react';
import { Box } from '@stack-ui/components'
import { Sidebar, Chart, TopHeader, UpdateAverage } from './components';

class Dashboard extends React.PureComponent {
  render() {
    return (
      <Box ml="13%" p="40px" mt="70px">
        <TopHeader />
        <UpdateAverage />
        <Sidebar />
        <Chart />
      </Box>
    )
  }
}
export default Dashboard;