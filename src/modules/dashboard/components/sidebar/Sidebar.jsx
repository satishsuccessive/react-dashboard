import React from 'react';
import styled from 'styled-components';
import { Sidebar, Box } from '@stack-ui/components';
import { sideNavigation } from './config';

export const Styled = styled.div`{
    >div{
        z-index: 101
    }
 }`;

class SidebarComponent extends React.PureComponent {
  render() {
    return (
      <Styled>
        <Sidebar>
          {sideNavigation.map(item => (
            <Box p="10px" display="flex" justifyContent="space-between">
              <p>{item.title}</p>
              <span><b>&#62;</b></span>
            </Box>
          ))}
        </Sidebar></Styled>
    )
  }
}
export default SidebarComponent;