import React from 'react'
import { DropdownMenu } from '../../components/dropdownMenu';
import { SearchBox, Box, Avatar, Button, Header, Icon } from '@stack-ui/components';

import { StyledHeader } from './style';


class HeaderWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isClicked: false,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    const { isVisible } = this.state;
    this.setState({
      isVisible: !isVisible,
    })
  }
  handleclickEvent = (e) => {
    console.log('clicked')
    // e.preventDefault();
    const { isClicked } = this.state;
    this.setState({
      isClicked: !isClicked,
    })
  }
  option = [
    {
      item: 'Finance Report',
      link: "",
    },
    {
      item: 'Monthly Report',
      link: "",
    },
    {
      item: 'Revenue Report',
    },
    {
      item: 'Settings',
    },
    {
      item: 'Help  & Support',
    },
  ]
  accountoptions = [
    {
      icon: "",
      item: 'My account',
      link: "",
    },
    {
      icon: "",
      item: 'Setting',
      link: "",

    },
    {
      icon: "",
      item: 'Lock screen',

    },
    {
      icon: "",
      item: 'Logout',

    },
  ]

  render() {
    const { isVisible, isClicked } = this.state;
    return (
      <StyledHeader>
        <Header mode="light" fixed className="xx">
          <Box display="flex" justifyContent="space-between" p="0px">
            <Box style={{ color: "#000" }} p="0px" m="0px">
            <Icon  icon="align-left" />
            </Box>
            <Box style={{ color: "#000" }} p="0px" m="0px" display="flex" alignItems="center">
              <Box mr="20px" p="0px" m="0px" className="search">
                <SearchBox className="searchBox" bg="#f1f5f7" borderRadius="30px 0 0 30px" size="sm" placeholder="Search... ">
                  <Button borderRadius="0 30px 30px 0" size="md" btnType="#f1f5f7" btnVariant="contained" icon="search" color="#6c757d">
                  <Icon size="12" icon="search" />
                  </Button>
                </SearchBox>
              </Box>
              <Box mr="20px" p="0px" m="0px">
               <Icon size="20" icon="notifications"/>
              </Box>
              <Box mr="18px" p="0px" m="0px" display="flex">
                <Box mr="10px" className="avtar">
                <Avatar size="sm" src="https://coderthemes.com/upvex/layouts/light/assets/images/users/user-1.jpg" alt="smallAvatar" />
                </Box>
                <Box display="flex" alignItems="center">
                  <ul className="listing menuSetting" >
                    <li onClick={(e) => this.handleclickEvent(e)}><a href="#">Marcia J 
                    <Icon icon="chevron-down"/>
                    </a></li>
                  </ul>
                </Box>
              </Box>
              <Box p="0px" m="0px">
              <Icon size="18" icon="cog" />
              </Box>
            </Box>
          </Box>
        </Header>
      </StyledHeader>
    )
  }
}

export default (HeaderWrapper);



