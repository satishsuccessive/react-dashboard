import React from 'react'
import { Box } from '@stack-ui/components';

class TopHeader extends React.PureComponent {
    render() {
        return (
            <Box display="flex" p="0 30px" justifyContent="space-between">
            <p>Dashboard</p>
            <p>Upvex / Dashboard / Dashboard2</p>
        </Box>
        )
    }
}
export default TopHeader;