import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Menu from './Menu';
import Search from './Search';
import Logo from './Logo';
import Aside from './styled';

const SideBar = () => (
  <Aside>
    <Logo />
    <Search />
    <Menu />
  </Aside>
);

SideBar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(SideBar);
