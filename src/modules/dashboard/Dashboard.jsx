import React from 'react';
import { Box, StackChart, Row, Col } from '../../components'
import { Sidebar, Chart, Card, TopHeader, UpdateAverage } from './components';

class Dashboard extends React.PureComponent {
    render() {
        return (
            <Box ml="13%" p="40px" mt="70px">
                <TopHeader />
                <UpdateAverage />
                <Sidebar />
                <Chart />
            </Box>
        )
    }
}
export default Dashboard;