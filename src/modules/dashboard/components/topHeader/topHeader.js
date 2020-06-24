import React from 'react'
import { Box } from '../../../../components';

class TopHeader extends React.PureComponent {
    render() {
        return (
            <Box display="flex" justifyContent="space-between">
            <p>Dashboard</p>
            {/* Need to implement Bredcum but currently not working */}
            <p>Upvex / Dashboard / Dashboard2</p>
        </Box>
        )
    }
}
export default TopHeader;