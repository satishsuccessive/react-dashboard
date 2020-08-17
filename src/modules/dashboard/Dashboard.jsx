import React from 'react';
import { Box } from '@stack-ui/components'
import { Sidebar, Chart, TopHeader, UpdateAverage } from './components';

class Dashboard extends React.PureComponent {
  render() {
    return (
      <Box ml="18%" p="20px" background="#f5f6f8">
        <TopHeader />
        <UpdateAverage />
        <Sidebar />
        <Chart />
      </Box>
    )
  }
}
export default Dashboard;