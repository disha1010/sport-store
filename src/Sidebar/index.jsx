import React, { Component } from 'react';
import Search from './Search';
import Logo from './Logo';
import Menu from './Menu';
import { MenuWrapper, Aside } from './styled';
import { StyledLink as Link, MenuIcon } from './Menu/styled';

import hamburger from './Menu/menu-icon.png';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.state = {
      isMobileMenuOpened: false,
    };
  }

  toggleMobileMenu() {
    this.setState(prevState => ({ isMobileMenuOpened: !prevState.isMobileMenuOpened }));
  }

  render() {
    return (
      <Aside>
        <Logo />
        <MenuIcon src={hamburger} alt="menu-icon" onClick={this.toggleMobileMenu} />
        <Search />
        <MenuWrapper isMobileOpened={this.state.isMobileMenuOpened}>
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
  }
}

export default SideBar;
