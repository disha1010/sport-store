import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArrowIcon from './Icon';
import { Nav, ButtonTitle, Wrapper } from './styled';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <Wrapper>
        <ButtonTitle onClick={this.toggle}>
          {this.props.title}
          <ArrowIcon />
        </ButtonTitle>
        {this.state.isOpen && <Nav>{this.props.children}</Nav>}
      </Wrapper>
    );
  }
}

Menu.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Menu.defaultProps = {
  title: '',
};

export default Menu;
