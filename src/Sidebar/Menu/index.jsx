import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArrowIcon from './Icon';
import { Nav, Title, Wrapper } from './styled';

class Menu extends Component {
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
      <Wrapper>
        <Title onClick={this.toggle}>
          {this.props.title}
          <ArrowIcon />
        </Title>
        {this.state.isOpened && <Nav>{this.props.children}</Nav>}
      </Wrapper>
    );
  }
}

Menu.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
Menu.defaultProps = {
  title: '',
};

export default Menu;
