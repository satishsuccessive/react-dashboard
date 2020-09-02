import React from 'react';
import { Box } from '@stack-ui/components'
import { Sidebar, Chart, TopHeader, UpdateAverage, RightSidebar } from './components';
import  {HeaderWrapper}  from "../../modules/header";
import GeneralUi from './components/generalUi/GeneralUi';

class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sidebarToggle : false,
      enable:false,

    };
  }
  handleToggleEvent = (e) => {
    const { sidebarToggle } = this.state;
    this.setState({
      sidebarToggle: !sidebarToggle,
    })
  }
  handleEnabledFun = (e) => {
    const { enable } = this.state;
    this.setState({
      enable: !enable,
    })
  }

  render() {
    const { isGeneralUi } = this.props;
    const { sidebarToggle,enable } = this.state
    return (
      <>
      <Box className= {`${enable ? "rightbar-overlay" : ""}`}></Box>
       <HeaderWrapper 
       handleToggleEvent={this.handleToggleEvent}
       sidebarToggle={sidebarToggle}
       handleEnabledFun={this.handleEnabledFun}
       enable={enable}
       />
      <Box ml="16%" p="20px" background="#f5f6f8" className= {`${sidebarToggle ? "remove-width" : "add-width"}`}>
        <TopHeader isGeneralUi={isGeneralUi} />
        {isGeneralUi ? (<GeneralUi />) : (<><UpdateAverage /><Chart /></>)}
        <Sidebar sidebarToggle={sidebarToggle} />
        <RightSidebar 
         enable={this.state.enable}
         handleEnabledFun={this.handleEnabledFun}

        />
      </Box>
      </>
    )
  }
}
export default Dashboard;