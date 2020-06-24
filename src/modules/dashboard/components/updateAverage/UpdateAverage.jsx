import React from 'react';
import { Box, Card, StackChart } from '../../../../components';

const cardDetails = [{
    title: "New Customers",
    percentage: "58",
    count: 268,
    last: "Since last week",
    seriesCount: 58,
},
{
    title: "Online Orders",
    percentage: "80",
    count: 8715,
    last: "Since last month",
    seriesCount: 80,
},
{
    title: "revenue",
    percentage: "77",
    count: "$925",
    last: "This week",
    seriesCount: 77,
}, {
    title: "Daily Average",
    percentage: "35",
    count: "$78.83",
    last: "Revenue today",
    seriesCount: 35,
}]
class UpdateAverage extends React.PureComponent{
    render(){
        return(
            <Box display="flex">
                    {
                        cardDetails.map(items => (
                            <Box p="10px" style={{ width: "23%" }}>
                                <Card>
                                    <Box p="10px">{items.title}</Box>
                                    <Box display="flex" justifyContent="space-between">
                                        <StackChart
                                            type="radialBar"
                                            width={100}
                                            height={150}
                                            options={{
                                                chart: {
                                                id: 'apexchart-example',
                                                labels: 'Progress'
                                                 }
                                                }}
                                            series={[items.seriesCount]}
                                            // label="abd"
                                        />
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
        )
    }
}
export default UpdateAverage;