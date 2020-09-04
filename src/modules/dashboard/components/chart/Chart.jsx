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
          <Card cardTitle="Donut and Radar Chart">
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
          <Card cardTitle="Simple Table">
          <Box p="20px">
          <Table striped bordered hover responsive >
    <thead>
        <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        </tr>
        
        <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        </tr>
        <tr>
        <td>3</td>
        <td colSpan="2">Larry the Bird</td>
        <td>@twitter</td>
        </tr>
    </tbody>
    <tbody>
        <tr>
        <td>4</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        </tr>
        <tr>
        <td>5</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        </tr>
    </tbody>
</Table>
          </Box>
          </Card>
          </Box>
        </Box>
</>
    )
  }
}
export default Chart;