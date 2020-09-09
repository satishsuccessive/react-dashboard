import React from 'react';
import { Sidebar, Typography, Icon, Avatar, Box, Badge} from '@stack-ui/components';
import Switch from '@stack-ui/components/dist/cjs/components/Switch/Switch';
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
       Settings
       <Icon onClick = {handleEnabledFun} style={{cursor:'pointer'}}  size="14" icon="small-cross" />
      </Typography>
      </Box>
      <Box className="avtarStyle" display="flex" mt="20px" mb="25px" textAlign="center" justifyContent="center">
      <Avatar title="Marcia J. Melia" subTitle="Product Owner" subTitleFont="12px" size="lg" src="https://coderthemes.com/upvex/layouts/light/assets/images/users/user-1.jpg" alt="largeAvatar" isBold="600" />
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
      <Box p="20px" style={{borderTop:"1px solid #f7f7f7", borderBottom:"1px solid #f7f7f7"}}>
      <Box mb="10px"><Switch label="Notifications"/></Box>
      <Box  mb="10px"><Switch label="API Access"/></Box>
      <Box  mb="10px"><Switch label="Auto Updates"/></Box>
      <Box  mb="10px"><Switch label="Online Status"/></Box>

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
  <Typography as="p" size="14px">
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