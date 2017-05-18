import React from 'react';
import Submenu from './Submenu';

import Nav from './styled';

export default () => (
  <Nav>
    <Submenu menuTitle={'sports'} />
    <Submenu menuTitle={'brands'} />
    <Submenu menuTitle={'micoach'} />
  </Nav>
);

