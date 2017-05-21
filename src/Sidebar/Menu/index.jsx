import React from 'react';
import Submenu from './Submenu';

import Nav from './styled';

const Menu = () => (
  <Nav>
    <Submenu menuTitle="sports" />
    <Submenu menuTitle="brands" />
    <Submenu menuTitle="micoach" />
  </Nav>
);

export default Menu;
