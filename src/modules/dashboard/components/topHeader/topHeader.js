import React from 'react'
import { Box, Typography } from '@stack-ui/components';

class TopHeader extends React.PureComponent {
    render() {
        const { isGeneralUi } = this.props;
        return (
            <Box display="flex" p="10px" justifyContent="space-between" className="header-settings">
                <Typography as="h3" isBold>
                {isGeneralUi ? 'General UI' : 'Dashboard 2'}
                </Typography>
                <Typography as="h5">Stack UI > Dashboard > Dashboard 2</Typography>
            </Box>
        )
    }
}
export default TopHeader;