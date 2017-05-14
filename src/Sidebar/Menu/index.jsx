import React from 'react';
import Submenu from './Submenu';
import { Nav, MenuLink } from './styled';

export default () => (
  <Nav>
    <Submenu />
    <MenuLink to="">brands</MenuLink>
    <MenuLink to="">micoach</MenuLink>
  </Nav>
  );
