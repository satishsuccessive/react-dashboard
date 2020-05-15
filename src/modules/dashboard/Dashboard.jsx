import React from 'react';
import { TopHeader, Chart } from './components';

class Dashboard extends React.PureComponent{
    render(){
        return(
            <>
            <TopHeader />
            <Chart />
            </>
      )
    }
}
export default Dashboard;