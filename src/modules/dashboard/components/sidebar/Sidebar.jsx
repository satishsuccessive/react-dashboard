import React from 'react';
import { Sidebar, Box, Icon, Image } from '@stack-ui/components';
import { sidebarNav } from './config';
import { SIDEBAR_LOGO } from '../../../../utils/constant';
import { Link } from 'react-router-dom';
import { StyledSidebar } from './style';


class SidebarComponent extends React.PureComponent {
  constructor() {
    super()
    this.state={
     active: {  },
    }
  }
   handleToggleFun = (key) => {
    const { active } = this.state;
    this.setState({
     active: { ...active, ...active[key] ? { [key]: !active[key] } : { [key]: true }}
  })}

  render() {
   const { sidebarToggle, handleToggleEvent } = this.props;
    return (
      <StyledSidebar>
      <Sidebar background="#3d454e" style={{width:"240px", padding:"0"}} className= {`${sidebarToggle ? "removeWidth" : "fullwidth"}`}>
        <Box mt="40px">
        <Box mb="26px" style={{textAlign: "center"}}>
        <Image width= "80px" src={SIDEBAR_LOGO} alt="sidebarLogo" />
        </Box>
        <Box>
    {sidebarNav.map((item,index) => {
        return <Box key={index}>
          <Box display="flex" style={{cursor:"pointer"}} className= {`${this.state.active[item.sidebarText] ? "active" : "disabled"}`} alignItems="center" pt="13px" pb="13px" pl="20px" pr="20px"> 
          {item.dropDown ? 
          <Box className="menubtn" onClick= {()=> this.handleToggleFun(item.sidebarText)}> 
          {item.dropDown && <Icon onClick={handleToggleEvent} style={{margin:"0 10px"}} size="16" color="#8391a0" icon={item.iconLeft} />}
          <span className="textwrap">{item.sidebarText}</span>
          {item.dropDown && <Icon className="rightIcon" style={{position:'absolute', right:"10%"}} size="16" color="#8391a0" icon={item.iconRight} />}
          </Box>:
             <Link className="menubtn" to ={item.sidebarLink}>
             <Icon onClick={handleToggleEvent} style={{margin:"0 10px"}} size="16" color="#8391a0" icon={item.iconLeft} />
             <span className="textwrap">{item.sidebarText}</span>
               {item.dropDown && <Icon className="rightIcon" style={{margin:"0 10px"}} size="16" color="#8391a0" icon={item.iconRight} />}
          </Link> }
             </Box>
             {item.dropDown &&
             <Box>
             {item.dropDown.map((dropdrownItem,index) => {
                 return <Box key={index} >
                     <Link className="menubtn" style={{padding:"8px 55px 10px"}} to={dropdrownItem.navLink}>
                     <span className="textwrap">{dropdrownItem.navText}</span>
                     </Link>
                 </Box>
             })}
             </Box>
    }
        </Box>
    })}
</Box>

        </Box>
      </Sidebar>
      </StyledSidebar>
    )
  }
}
export default SidebarComponent;