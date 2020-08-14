import React from 'react';
import { Sidebar, Box } from '@stack-ui/components';
import { sideNavigation } from './config';

class SidebarComponent extends React.PureComponent {
  render() {
    return (
        <Sidebar position="left">
          {sideNavigation.map(item => (
            <Box p="10px" display="flex" justifyContent="space-between">
              <p>{item.title}</p>
              <span><b>&#62;</b></span>
            </Box>
          ))}
        </Sidebar>
    )
  }
}
export default SidebarComponent;