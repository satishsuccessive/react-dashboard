import React from 'react';
import { Sidebar, Typography, Icon, Avatar, Box, Badge} from '@stack-ui/components';
import { StyledSidebar } from './style';


class SidebarComponent extends React.PureComponent {
  constructor() {
    super()
    this.state={}
  }

  blogList = [
    {
      imgPath: "https://coderthemes.com/upvex/layouts/light/assets/images/users/user-1.jpg",
      title:"Tomaslau",
      paragraph:"I've finished it! See you so..."
    },
    {
      imgPath: "https://coderthemes.com/upvex/layouts/light/assets/images/users/user-1.jpg",
      title:"Tomaslau",
      paragraph:"I've finished it! See you so..."
    },
    {
      imgPath: "https://coderthemes.com/upvex/layouts/light/assets/images/users/user-1.jpg",
      title:"Tomaslau",
      paragraph:"I've finished it! See you so..."
    },
    {
      imgPath: "https://coderthemes.com/upvex/layouts/light/assets/images/users/user-1.jpg",
      title:"Tomaslau",
      paragraph:"I've finished it! See you so..."
    },
  ]


  render() {
    const { enable, handleEnabledFun } = this.props;
    console.log(enable, 'rightheader')
    return (
      <StyledSidebar>
      <Sidebar background="#ffffff" position="right" style={{width:"260px", padding:"0"}} className= {`${enable ? "addClass" : "removeClass"}`}>
        <Box className="subTitle">
      <Typography as="h5" isBold>
       Setting
       <Icon onClick = {handleEnabledFun} style={{cursor:'pointer'}}  size="14" icon="small-cross" />
      </Typography>
      </Box>
      <Box className="avtarStyle" display="flex" mt="20px" mb="25px" textAlign="center" justifyContent="center">
      <Avatar title="M. Gandhi" subTitle="lorem impsum" size="sm" src="https://coderthemes.com/upvex/layouts/light/assets/images/users/user-1.jpg" alt="largeAvatar" />
      </Box>
      <Box p="20px" style={{borderTop:"1px solid #f7f7f7", borderBottom:"1px solid #f7f7f7"}} display="flex" justifyContent="space-between">
        <Box>
       <Typography as="p" isBold color="#414d5f" >
        8504
  </Typography>
  <Typography as="p" color="#414d5f">
        Balance
  </Typography>
  </Box>
  <Box>
  <Typography as="p" isBold  >
        8504
  </Typography>
  <Typography as="p" >
        Balance
  </Typography>
      </Box>
      </Box>
      <Box p="20px" style={{borderTop:"1px solid #f7f7f7", borderBottom:"1px solid #f7f7f7"}} display="flex" justifyContent="space-between">
        <Box>
       <Typography type="heading" as="h5" color="#414d5f">
        Messages
  </Typography>
  </Box>
  <Box>
  <Badge pill variant="danger">
        25
    </Badge>{' '}
      </Box>
      </Box>
      <Box mt="10px">
      {this.blogList.map((item,index) => {
      return <Box key={index} display="flex" mt="20px" pl="20px" pr="20px" mb="20px" justifyContent="space-between">
<Box mr="20px">
<Avatar size="sm" src={item.imgPath} alt="smallAvatar" />
</Box>
 <Box>
  <Typography as="h5" color="#000000">
  {item.title}
  </Typography>
  <Typography as="p">
 {item.paragraph}
  </Typography>
</Box>
      </Box>
      })}
      </Box>
      
      </Sidebar>
      </StyledSidebar>
    )
  }
}
export default SidebarComponent;