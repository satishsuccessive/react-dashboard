import React from 'react';
import { Box } from '@stack-ui/components'
import { Sidebar, Chart, TopHeader, UpdateAverage } from './components';
import { HeaderWrapper } from "../../modules/header";


class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sidebarToggle : false,
    };
  }
  handleToggleEvent = (e) => {
    alert('clicked')
    // e.preventDefault();
    const { sidebarToggle } = this.state;
    this.setState({
      sidebarToggle: !sidebarToggle,
    })
  }

  render() {
    return (
     
      <>
       <HeaderWrapper 
       handleToggleEvent={this.handleToggleEvent}
       />
      <Box ml="16.7%" p="20px" background="#f5f6f8">
       
        <TopHeader />
        <UpdateAverage />
        <Sidebar />
        <Chart />
      </Box>
      </>
    )
  }
}
export default Dashboard;