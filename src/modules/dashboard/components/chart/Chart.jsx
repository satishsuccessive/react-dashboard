import React from 'react';
import { StackChart, Box, Card, Table } from '@stack-ui/components';

class Chart extends React.PureComponent {
  render() {
    const data = [10, 20, 40, 80, 100, 120, 160, 180];
    const name = 'Sales Analytics';
    const categories = ['1jan', '1feb', '1march', '1apr', '1may', '1june', '1july', '1aug'];
    return (
      <>
        <Box display="flex" justifyContent="space-between" p="10px">
          <Box mr="20px" width="50%">
          <Card cardTitle="Sales Analytics">
            <Box p="20px">
              <StackChart type="bar" height={320} options={{
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
        <Box display="flex" justifyContent="space-between" p='10px'>
        <Box mr="20px" width="50%">
          <Card cardTitle="Donut Chart" style={{'height':"100%"}}>
          <Box p="20px">
          <StackChart type="donut" width={400} height={320} options={{
  chart: {
    id: 'apexchart-example'
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
  }
}} series={[44, 55, 13, 33]} />

          </Box>
          </Card>
          </Box>
          <Box width="50%">
          <Card cardTitle="Radar chart"  style={{'height':"100%"}}>
          <Box p="20px">
          <StackChart type="radar" width={500} height={320} options={{
  chart: {
    id: 'apexchart-example'
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
  }
}} series={[{
  name: "Radar Series 1",
  data: [45, 52, 38, 24, 33, 10]
}, {
  name: "Radar Series 2",
  data: [26, 21, 20, 6, 8, 15]
}]} />
          </Box>
          </Card>
          </Box>
        </Box>
</>
    )
  }
}
export default Chart;