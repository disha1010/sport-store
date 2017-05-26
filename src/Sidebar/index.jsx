import React from 'react';
import Search from './Search';
import Logo from './Logo';
import Menu from './Menu';
import { MenuWrapper, Aside } from './styled';
import { StyledLink as Link, MenuIcon } from './Menu/styled';

import hamburger from './Menu/menu-icon.png';

const SideBar = () => (
  <Aside>
    <Logo />
    <MenuIcon src={hamburger} alt="menu-icon" />
    <Search />
    <MenuWrapper>
      <Menu title="football">
        <Link to="/products/football/shoes">shoes</Link>
        <Link to="/products/football/clothing">clothing</Link>
        <Link to="/products/football/accesories"> accesories </Link>
      </Menu>
      <Menu title="running">
        <Link to="/products/running/shoes"> shoes </Link>
        <Link to="/products/running/clothing"> clothing </Link>
        <Link to="/products/running/accesories"> accesories </Link>
      </Menu>
      <Menu title="basketball">
        <Link to="/products/basketball/shoes"> shoes </Link>
        <Link to="/products/basketball/clothing"> clothing </Link>
        <Link to="/products/basketball/accesories"> accesories </Link>
      </Menu>
    </MenuWrapper>
  </Aside>
  );

export default SideBar;
