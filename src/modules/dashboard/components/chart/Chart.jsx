import React from 'react';
import { StackChart, Col, Box, Card } from '../../../../components';
import { CardWrapper } from './style';


class Chart extends React.PureComponent{
    render(){
      const data = [10,20,40,80,100,120,160,180];
        const name = 'Sales Analytics';
        const categories= ['1jan', '1feb', '1march', '1apr', '1may', '1june', '1july', '1aug'];
        return (
         <CardWrapper>
          <Box display="flex" justifyContent="space-between">
          <Box><Card style={{minHeight:"475px"}}  cardTitle="Sales Analytics">
            <Box p="20px">
            <StackChart type="bar" width={652} height={285} options={{
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
          <Box style={{width:'60%'}}><Card style={{minHeight:"475px"}} cardTitle="Graph Anaylsis"><Box p="20px">
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
      </CardWrapper>
        )
}
}
export default Chart;