import React from 'react'
import { SearchBox, Box, Avatar, Button, Header, Icon , Menu} from '@stack-ui/components';
import { Link } from 'react-router-dom';
import { StyledHeader } from './style';


class HeaderWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }


  accountoptions = [
    {
      item: 'Welcome !',
    },
    {
      icon: "person",
      item: 'My account',
      link: "",
    },
    {
      icon: "cog",
      item: 'Setting',
      link: "",

    },
    {
      icon: "lock",
      item: 'Lock screen',

    },
    {
      icon: "log-out",
      item: 'Logout',

    },
  ]
  reportOption = [
    {
      item: 'Finance Report',
      link: "",
    },
    {
      item: 'Monthly Report',
      link: "",

    },
    {
      item: ' Revenue Report',

    },
    {
      item: 'Settings',

    },
    {
      item: 'Help & Support',

    },
  ]
 

  render() {
    const { handleToggleEvent, handleEnabledFun, sidebarToggle} = this.props;
    
    return (
      <StyledHeader>
        <Header mode="light" fixed className="xx">
          <Box display="flex" justifyContent="space-between" p="0px">
            <Box display="flex" alignItems="center" style={{ color: "#000" }} p="0px" ml="250px" className= {`${sidebarToggle ? "remove" : "add"}`}>
            <Icon  onClick={handleToggleEvent} style={{cursor:'pointer', height:"20px"}} icon="align-left" />
            <Box display="flex" alignItems="center">
                <Menu value="Report" icon="chevron-down" btnType="default"  Iconsize="sm"
                options={this.reportOption}/>
                </Box>
            </Box>
            <Box style={{ color: "#000" }} p="0px" m="0px" display="flex" alignItems="center">
              <Box mr="20px" p="0px" m="0px" className="search">
                <SearchBox className="searchBox" bg="#f1f5f7" borderRadius="30px 0 0 30px" size="sm" placeholder="Search... ">
                  {/* <Button borderRadius="0 30px 30px 0"  icon="search" color="#6c757d"> */}
                  {/* <Icon size="12" icon="search" /> */}
                  {/* </Button> */}
                </SearchBox>
              </Box>
              <Box mr="20px" p="0px" m="0px">
               <Icon size="20" icon="notifications"/>
              </Box>
              <Box p="0px" m="0px" display="flex" alignItems="center">
                <Box className="avtar">
                <Avatar size="sm" src="https://coderthemes.com/upvex/layouts/light/assets/images/users/user-1.jpg" alt="smallAvatar" />
                </Box>
                <Box className="dropBox" p="0" display="flex" alignItems="center">
                <Menu style={{padding:'0'}} value="Marcia J." icon="chevron-down" btnType="default"  Iconsize="sm"
                 options={this.accountoptions}/>
                </Box>
              </Box>
              <Box p="0px" m="0px">
              <Icon onClick = {handleEnabledFun} style={{cursor:'pointer'}}   size="18" icon="cog" />
              </Box>
            </Box>
          </Box>
        </Header>
      </StyledHeader>
    )
  }
}

export default (HeaderWrapper);



