import React from 'react';
import { Sidebar, Box } from '../../../../components';

const sideNavigation = [{
    title: "Dashboards",
},{
    title: "Apps",
},{
    title: "Layouts",
},{
    title: "Email",
},{
    title: "Pages",
},{
    title: "Extra Pages",
},{
    title: "UI Elements",
},{
    title: "Widgets",
},{
    title: "Admin UI",
},{
    title: "Icons",
},{
    title: "Forms",
},{
    title: "Tables",
},{
    title: "Charts",
},{
    title: "Maps",
}]

class SidebarComponent extends React.PureComponent{
    render(){
        return(
        <Sidebar>
            {sideNavigation.map( item => (
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