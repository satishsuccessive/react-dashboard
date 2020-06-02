import React from 'react';
import { StackChart } from '../../../../components'

class Chart extends React.PureComponent{
    render(){
        const data = [10,20,40,80,100,120,160,180];
        const name = 'Sales Analytics';
        const categories= ['1jan', '1feb', '1march', '1apr', '1may', '1june', '1july', '1aug'];
        return(
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
        )
    }
}
export default Chart;