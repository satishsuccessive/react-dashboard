import React from 'react';
import { Card, Button } from '../../components'
import 'bootstrap/dist/css/bootstrap.min.css';

class Dashboard extends React.PureComponent{
    render(){
        return(
            <Card cardTitle="Heading of card" bgColor="#fff" alignText="left" alignCard="center" imgUrl="https://coderthemes.com/upvex/layouts/light/assets/images/small/img-1.jpg" imgPos="top">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            </p>
            <Button btnType="primary" btnVariant="contained"> Button </Button>
        </Card>
      )
    }
}
export default Dashboard;