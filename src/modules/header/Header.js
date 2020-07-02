import React, { Component } from 'react'
import { HeaderWrapper } from './style';
import { DropdownMenu } from '../../components/dropdownMenu';
import { SearchBox, Box, Avatar, Button } from '../../components';




class Header extends Component {
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
    e.preventDefault();
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
      <>
        <HeaderWrapper>
          <header className="headerWrap">
            <Box display="flex" alignItems="center">
              <span>&#9776;</span>
              <Box display="flex"> <ul className="listing" >
                <li onClick={(e) => this.handleClick(e)}><a href="#">Reports &#11167;
    {isVisible ? <DropdownMenu options={this.option} /> : null}
                </a></li>
              </ul>
              </Box>



              <Box className="avtarWrap" display="flex" alignItems="center" justifyContent="flex-end">
                <SearchBox className="searchBox" bg="#f1f5f7" borderRadius="30px 0 0 30px" size="md" placeholder="Search... ">
                  <Button borderRadius="0 30px 30px 0" size="md" btnType="#f1f5f7" btnVariant="contained" icon="search" color="#6c757d"> </Button>
                </SearchBox>
                <Avatar size="sm" src="https://coderthemes.com/upvex/layouts/light/assets/images/users/user-1.jpg" alt="smallAvatar" />
                <ul className="listing menuSetting" >
                  <li onClick={(e) => this.handleclickEvent(e)}><a href="#">Marcia J &#11167;
    {isClicked ? <DropdownMenu options={this.accountoptions} /> : null}
                  </a></li>
                </ul>
                <span className="iconwrap">&#x1f514;</span>
                <span>&#9881;</span>
              </Box>

            </Box>
          </header>
        </HeaderWrapper>
      </>
    )
  }
}

export default (Header);



