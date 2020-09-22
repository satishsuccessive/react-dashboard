import React from 'react';
import { Sidebar, Typography, Icon, Avatar, Box, Badge, Switch} from '@stack-ui/components';
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
      <Typography as="h5" isBold >
       Settings
       <Icon onClick = {handleEnabledFun} style={{cursor:'pointer'}}  size="14" icon="small-cross" />
      </Typography>
      </Box>
      <Box className="avtarStyle" display="flex" mt="20px" mb="25px" textAlign="center" justifyContent="center">
      <Avatar title="Marcia J. Melia" subTitle="Product Owner" subTitleColor ="#6c757d" subTitleFont="13px" size="lg" src="https://coderthemes.com/upvex/layouts/light/assets/images/users/user-1.jpg" alt="largeAvatar" isBold="600" />
      </Box>
      <Box p="20px" style={{borderTop:"1px solid #f7f7f7", borderBottom:"1px solid #f7f7f7"}} display="flex" justifyContent="space-between">
        <Box>
       <Typography as="p" isBold color="#414d5f" >
        8504
  </Typography>
  <Typography as="p" color ="#6c757d">
        Balance
  </Typography>
  </Box>
  <Box>
  <Typography as="p" isBold color="#414d5f">
        8504
  </Typography>
  <Typography as="p" color ="#6c757d" >
        Balance
  </Typography>
      </Box>
      </Box>
      <Box p="20px" style={{borderTop:"1px solid #f7f7f7", borderBottom:"1px solid #f7f7f7"}}>
      <Box mb="10px"><Switch color ="#6c757d" isBold="500" isChecked label="Notifications"/></Box>
      <Box  mb="10px"><Switch color ="#6c757d"  isBold="500" label="API Access"/></Box>
      <Box  mb="10px"><Switch color ="#6c757d" isBold="500" isChecked label="Auto Updates"/></Box>
      <Box  mb="10px"><Switch color ="#6c757d" isBold="500" label="Online Status"/></Box>

      </Box>
      <Box p="20px" style={{borderTop:"1px solid #f7f7f7", borderBottom:"1px solid #f7f7f7"}} display="flex" justifyContent="space-between">
        <Box>
       <Typography type="heading" as="h5" color="#414d5f">
        Messages
  </Typography>
  </Box>
  <Box pr="15px">
  <Badge pill color="white" bgColor="#f0643b">
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
  <Typography as="p" size="14px" color ="#6c757d">
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