import React from 'react'
import { Box, Typography } from '@stack-ui/components';

class TopHeader extends React.PureComponent {
    render() {
        return (
            <Box display="flex" p="10px" justifyContent="space-between">
                <Typography as="h3" isBold>Dashboard 2</Typography>
                <Typography as="h5">Stack UI > Dashboard > Dashboard 2</Typography>
            </Box>
        )
    }
}
export default TopHeader;