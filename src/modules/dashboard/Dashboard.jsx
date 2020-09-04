import React from 'react';
import { Box } from '@stack-ui/components'
import { Sidebar, Chart, TopHeader, UpdateAverage } from './components';
import GeneralUi from './components/generalUi/GeneralUi';
import EarningReports from './components/earningReports/EarningReports';

class Dashboard extends React.PureComponent {
  render() {
    const { isGeneralUi } = this.props;
    console.log(this.props,'{{{{{{{{{')
    return (
      <Box ml="18%" p="20px" background="#f5f6f8">
        <TopHeader isGeneralUi={isGeneralUi} />
        {isGeneralUi ? (<GeneralUi />) : (<><UpdateAverage /><Chart /><EarningReports /></>)}
        <Sidebar />
      </Box>
    )
  }
}
export default Dashboard;