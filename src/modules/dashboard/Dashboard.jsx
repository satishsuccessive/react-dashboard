import React from 'react';
import { Box } from '@stack-ui/components'
import { Sidebar, Chart, TopHeader, UpdateAverage } from './components';
import  {HeaderWrapper}  from "../../modules/header";

import GeneralUi from './components/generalUi/GeneralUi';

class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sidebarToggle : false,
    };
  }
  handleToggleEvent = (e) => {
    // alert('clicked')
    // e.preventDefault();
    const { sidebarToggle } = this.state;
    this.setState({
      sidebarToggle: !sidebarToggle,
    })
  }

  render() {
    const { isGeneralUi } = this.props;
    const { sidebarToggle } = this.state
    console.log('sidebarToggle', this.state)
    return (
      <>
       <HeaderWrapper 
       handleToggleEvent={this.handleToggleEvent}
       />
      <Box ml="16%" p="20px" background="#f5f6f8">
        <TopHeader isGeneralUi={isGeneralUi} />
        {isGeneralUi ? (<GeneralUi />) : (<><UpdateAverage /><Chart /></>)}
        <Sidebar className= {`${sidebarToggle ? "removeWidth" : "fullwidth"}`} />
      </Box>
      </>
    )
  }
}
export default Dashboard;