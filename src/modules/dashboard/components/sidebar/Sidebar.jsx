import React from 'react';
import styled from 'styled-components';
import { Sidebar, Box, Typography, Icon } from '@stack-ui/components';
import { sideNavigation } from './config';
import { } from '@stack-ui/components/dist/cjs/components/Typography';

class SidebarComponent extends React.PureComponent {
  render() {
    return (
      <Sidebar background="#3d454e">
        <Box mt="80px">
          {sideNavigation.map(item => (
            <Box display="flex" alignItems="center" p="5px">
              <Box width="20%">
                <Icon size="16" color="#8391a0" icon={item.iconLeft} />
              </Box>
              <Box width="80%" p="10px" display="flex" justifyContent="space-between">
                <Typography color="#8391a0" as="p" textAlign="left">{item.title}</Typography>
                <Icon size="16" color="#8391a0" icon={item.iconRight} />
              </Box>
            </Box>
          ))}
        </Box>
      </Sidebar>
    )
  }
}
export default SidebarComponent;