import React from 'react'
import { Box } from '../../../../components';
import {Header} from '../../../header';

class TopHeader extends React.PureComponent {
    render() {
        return (
            <Box display="flex" p="0 30px" justifyContent="space-between">
            <p>Dashboard</p>
            {/* Need to implement Bredcum but currently not working */}
            <p>Upvex / Dashboard / Dashboard2</p>
        </Box>
        )
    }
}
export default TopHeader;