import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Menu from './Menu';
import Search from './Search';
import Logo from './Logo';
import Aside from './styled';

export const SideBar = props => (
  <Aside>
    <Logo />
    <Search value={props.location.pathname === '/shoe' ? 'ultra boost' : ''} />
    <Menu />
  </Aside>
);

SideBar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(SideBar);
