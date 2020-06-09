import React, { Component } from 'react'
import { HeaderWrapper } from './style';
import { Container, Row, Col, Icon } from "@stack-ui/components";
import { DropdownMenu } from '../../components/dropdownMenu';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
         isVisible : false,
        };
      }
      
      handleClick = (e) =>{
        e.preventDefault();
        const { isVisible } = this.state;
        this.setState({
          isVisible: !isVisible,
        })
      }
    
       option = [
        {
          item:'Finance Report',
          link:"",
        },
        {
          item:'Monthly Report',
          link:"",
        },
        {
          item:'Revenue Report',
        },
        {
          item:'Settings',
        },
        {
          item:'Help  & Support',
        },
      ]

    render() {
   const { isVisible } = this.state;   

        return (
            <>
            <HeaderWrapper>
                <Container fluid className="headerWrap">
                    <Row>
                        <Col>
                        <ul className="listing" >
     <li onClick={(e) => this.handleClick(e)}><a href="#">Reports 
    {isVisible ? <DropdownMenu options = {this.option}  /> : null }
      </a></li>
    </ul>

                        </Col>

                    </Row>
                </Container>
                </HeaderWrapper>
            </>
        )
    }
}

export default (Header);



