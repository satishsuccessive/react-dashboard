import React from 'react';
import { StackChart, Col, Box, Card } from '@stack-ui/components';

class Chart extends React.PureComponent {
  render() {
    const data = [10, 20, 40, 80, 100, 120, 160, 180];
    const name = 'Sales Analytics';
    const categories = ['1jan', '1feb', '1march', '1apr', '1may', '1june', '1july', '1aug'];
    return (
        <Box display="flex" justifyContent="space-between" p="10px">
          <Box mr="20px" width="50%">
          <Card cardTitle="Sales Analytics">
            <Box p="20px">
              <StackChart type="bar" options={{
                chart: {
                  id: 'apexchart-example'
                },
                xaxis: {
                  categories
                }
              }} series={[{
                name,
                data
              }]} />
            </Box>
          </Card>
          </Box>
          <Box width="50%">
          <Card cardTitle="Graph Anaylsis">
          <Box p="20px">
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
          </Box></Card></Box>
        </Box>
    )
  }
}
export default Chart;