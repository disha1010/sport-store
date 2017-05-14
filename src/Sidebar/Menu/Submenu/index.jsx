import React from 'react';
import Icon from './Icon';
import { Nav, SubmenuLink, SubmenuTitle } from './styled';

export default () => (
  <div className="submenu">
    <div className="submenu-title active">
      <SubmenuTitle isActive>sports</SubmenuTitle>
      <Icon />
    </div>
    <Nav>
      <SubmenuLink isActive>shoes</SubmenuLink>
      <SubmenuLink>clothing</SubmenuLink>
      <SubmenuLink>accesories</SubmenuLink>
    </Nav>
  </div>
);
