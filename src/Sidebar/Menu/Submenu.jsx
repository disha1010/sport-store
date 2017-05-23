import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArrowIcon from './Icon';
import { Nav, StyledLink, Title, Menu } from './styled';

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
            <StyledLink to={{ pathname: `/${this.props.title}/shoes` }}>shoes</StyledLink>
            <StyledLink to={{ pathname: `/${this.props.title}/clothing` }}>clothing</StyledLink>
            <StyledLink to={{ pathname: `/${this.props.title}/accesories` }}>accesories</StyledLink>
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
