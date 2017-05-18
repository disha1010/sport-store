import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import { Nav, SubmenuLink, SubmenuTitle } from './styled';

export const SubMenu = props => (
  <div className="submenu">
    <div>
      <SubmenuTitle>{props.menuTitle}</SubmenuTitle>
      <Icon />
    </div>
    <Nav>
      <SubmenuLink>shoes</SubmenuLink>
      <SubmenuLink>clothing</SubmenuLink>
      <SubmenuLink>accesories</SubmenuLink>
    </Nav>
  </div>
);

SubMenu.propTypes = {
  menuTitle: PropTypes.string,
};
SubMenu.defaultProps = {
  menuTitle: '',
};
export default SubMenu;
