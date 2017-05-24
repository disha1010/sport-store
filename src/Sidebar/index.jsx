import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import Logo from './Logo';
import Menu from './Menu';
import { MenuWrapper, Aside } from './styled';
import { StyledLink as Link } from './Menu/styled';

const SideBar = () => (
  <Aside>
    <Logo />
    <Search />
    <MenuWrapper>
      <Menu title="football">
        <Link to="/football/shoes">shoes</Link>
        <Link to="/football/clothing">clothing</Link>
        <Link to="/football/accesories"> accesories </Link>
      </Menu>
      <Menu title="running">
        <Link to="/running/shoes"> shoes </Link>
        <Link to="/running/clothing"> clothing </Link>
        <Link to="/running/accesories"> accesories </Link>
      </Menu>
      <Menu title="basketball">
        <Link to="/basketball/shoes"> shoes </Link>
        <Link to="/basketball/clothing"> clothing </Link>
        <Link to="/basketball/accesories"> accesories </Link>
      </Menu>
    </MenuWrapper>
  </Aside>
);

SideBar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default SideBar;
