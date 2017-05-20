import React, { Component } from 'react';
import Submenu from './Submenu';

import Nav from './styled';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: ['sports', 'brands', 'micoach'],
    };
  }

  render() {
    return (
      <Nav>
        {this.state.entries.map(menuItem => <Submenu key={menuItem} menuTitle={menuItem} />)}
      </Nav>
    );
  }
}

export default Menu;
