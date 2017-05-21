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
    const submenuTitle = (
      <SubmenuTitle isActive={this.state.isOpened} onClick={this.toggleState}>
        {this.props.menuTitle}
        <ArrowIcon />
      </SubmenuTitle>
    );
    return (
      <div className="submenu">
        <div>
          {submenuTitle}
        </div>
        {this.state.isOpened &&
          <Nav>
            <SubmenuLink>shoes</SubmenuLink>
            <SubmenuLink>clothing</SubmenuLink>
            <SubmenuLink>accesories</SubmenuLink>
          </Nav>}
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
