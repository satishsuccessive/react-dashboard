import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Spinner,Button,Row,Col} from "@stack-ui/components";

function App() {
  return (
    <>
    <Row>
    <Col xl="4">
    <Card cardTitle="Heading of card" bgColor="#fff" alignText="left" alignCard="center" imgUrl="https://coderthemes.com/upvex/layouts/light/assets/images/small/img-1.jpg" imgPos="top">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>
        <Button btnType="primary" btnVariant="contained"> Button </Button>
    </Card>
    </Col>
     <Col xl="4">
    <Card cardTitle="Heading of card" bgColor="#fff" alignText="left" alignCard="center" imgUrl="https://coderthemes.com/upvex/layouts/light/assets/images/small/img-2.jpg" imgPos="bottom">
        <p>
        Some quick example text to build on the card title.
        </p>
        <a href="#">Go to Page</a>
    </Card>
    </Col>
     <Col xl="4">
    <Card cardTitle="Heading of card" subTitle="Support card subtitle" bgColor="#fff" alignText="left" alignCard="center" imgUrl="https://coderthemes.com/upvex/layouts/light/assets/images/small/img-4.jpg" imgPos="middle">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>
        <Button btnType="primary" btnVariant="contained"> Button </Button>
    </Card>
    </Col>
    </Row>
        <Row>
 <Col xl="4">
    <Card cardTitle="Heading of card" bgColor="#fff" alignText="left" alignCard="center" imgUrl="https://coderthemes.com/upvex/layouts/light/assets/images/small/img-1.jpg" imgPos="bg">
        <p>
        Some quick example text to build on the card title.
        </p>
    </Card>
    </Col>   
     </Row>
    </>
  );
}

export default App;
