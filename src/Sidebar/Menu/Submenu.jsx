import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArrowIcon from './Icon';
import { Nav, StyledLink as Link, Title, Menu } from './styled';

class SubMenu extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpened: false,
    };
  }

  toggle() {
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  }

  render() {
    return (
      <Menu>
        <Title onClick={this.toggle}>
          {this.props.title}
          <ArrowIcon />
        </Title>
        {this.state.isOpened &&
          <Nav>
            <Link to={{ pathname: `/${this.props.title}/shoes` }}>shoes</Link>
            <Link to={{ pathname: `/${this.props.title}/clothing` }}>clothing</Link>
            <Link to={{ pathname: `/${this.props.title}/accesories` }}>accesories</Link>
          </Nav>}
      </Menu>
    );
  }
}

SubMenu.propTypes = {
  title: PropTypes.string,
};
SubMenu.defaultProps = {
  title: '',
};

export default SubMenu;
