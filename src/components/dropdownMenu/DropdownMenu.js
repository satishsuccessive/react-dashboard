import React, { Component } from 'react';

 class DropdownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
         options: [{}]
        };
      }


    render() {
        const { options } = this.props;
        return (
           <ul>
          {options.map((item, key) => (
        <li><a href="#" >{item.icon}{item.item}</a>
        </li>
          ))}
           </ul> );
    }
}

export default DropdownMenu;