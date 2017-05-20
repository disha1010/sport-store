import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArrowIcon from './Icon';
import { Nav, SubmenuLink, SubmenuTitle } from './styled';

class SubMenu extends Component {
  constructor(props) {
    super(props);
    this.toggleState = this.toggleState.bind(this);
    this.state = {
      isOpened: false,
    };
  }

  toggleState() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    let submenuNav;
    if (this.state.isOpened) {
      submenuNav = (
        <Nav>
          <SubmenuLink>shoes</SubmenuLink>
          <SubmenuLink>clothing</SubmenuLink>
          <SubmenuLink>accesories</SubmenuLink>
        </Nav>
      );
    }
    return (
      <div className="submenu">
        <div>
          <SubmenuTitle onClick={this.toggleState}>
            {this.props.menuTitle}
            <ArrowIcon />
          </SubmenuTitle>
        </div>
        {submenuNav}
      </div>
    );
  }
}

SubMenu.propTypes = {
  menuTitle: PropTypes.string,
};
SubMenu.defaultProps = {
  menuTitle: '',
};

export default SubMenu;
