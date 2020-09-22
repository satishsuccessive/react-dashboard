import React from 'react'
import { Box, Typography , StyledBreadcrumb,Breadcrumb} from '@stack-ui/components';

class TopHeader extends React.PureComponent {
    render() {
        const { isGeneralUi } = this.props;
        return (
            <Box display="flex" p="10px" justifyContent="space-between" className="header-settings">
                <Typography as="h3" isBold>
                {isGeneralUi ? 'General UI' : 'Dashboard 2'}
                </Typography>
                <Box display="flex">
       <Breadcrumb>
     <StyledBreadcrumb.Item href="#">Stack UI</StyledBreadcrumb.Item>
     <StyledBreadcrumb.Item href="#">Dashboard</StyledBreadcrumb.Item>
     <StyledBreadcrumb.Item active>Dashboard 2</StyledBreadcrumb.Item>
</Breadcrumb>  
</Box>
            </Box>
        )
    }
}
export default TopHeader;