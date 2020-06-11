import React from 'react';
import { Box, StackChart, Row, Col } from '../../components'
import { Sidebar, Chart, Card, topHeader } from './components';

const cardDetails = [{
    title: "New Customers",
    percentage: "58",
    count: 268,
    last: "Since last week"
},
{
    title: "Online Orders",
    percentage: "80",
    count: 8715,
    last: 'Since last month'
},
{
    title: "revenue",
    percentage: "77",
    count: "$925",
    last: 'This week'
}, {
    title: "Daily Average",
    percentage: "35",
    count: "$78.83",
    last: 'Revenue today'
}]

class Dashboard extends React.PureComponent {
    render() {
        return (
            <Box ml="13%" p="40px" mt="70px">
                <Box display="flex" justifyContent="space-between">
                    <p>Dashboard</p>
                    {/* Need to implement Bredcum but currently not working */}
                    <p>Upvex / Dashboard / Dashboard2</p>
                </Box>
                <Box display="flex">
                    {
                        cardDetails.map(items => (
                            <Box p="10px" style={{ width: "23%" }}>
                                <Card>
                                    <Box p="10px">{items.title}</Box>
                                    <Box display="flex" justifyContent="space-between">
                                        <StackChart type="radialBar" width={100} height={150} options={{
                                        }} series={[39, 89, 13]} label="abd" />
                                        <Box display="flex" flexDirection="column" justifyContent="flex-end" alignItems="flex-end">
                                            <h3>{items.count}</h3>
                                            <span>{items.last}</span>
                                        </Box>
                                    </Box>
                                </Card>
                            </Box>
                        ))
                    }
                </Box>
                <Sidebar />
                <Box display="flex">
                    <Box><Card cardTitle="sales Analytics"><Box p="20px"><Chart /></Box></Card></Box>
                    <Box><Card><Box p="20px">
                        <Col xl="6">
                            <StackChart type="line" width={500} height={320} options={{
                                chart: {
                                    id: 'apexchart-example'
                                },
                                xaxis: {
                                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                                }
                            }} series={[{
                                name: 'series-1',
                                data: [30, 40, 45, 50, 49, 60, 70, 91]
                            }]} />
                        </Col>
                    </Box></Card></Box>

                </Box>
            </Box>
        )
    }
}
export default Dashboard;