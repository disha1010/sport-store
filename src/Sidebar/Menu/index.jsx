import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import ArrowIcon from './Icon';
import { Nav, ButtonTitle, Wrapper } from './styled';

class Menu extends Component {
  static isActiveMenu(category, locationPath) {
    const routes = locationPath.split('/');
    return category && routes[2] && routes[2] === category;
  }

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpened: Menu.isActiveMenu(props.category, props.location.pathname),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(prevState => ({
      isOpened: prevState.isOpened ||
        Menu.isActiveMenu(nextProps.category, nextProps.location.pathname),
    }));
  }

  toggle() {
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  }

  render() {
    return (
      <Wrapper>
        <ButtonTitle onClick={this.toggle}>
          {this.props.title}
          <ArrowIcon />
        </ButtonTitle>
        {this.state.isOpened && <Nav>{this.props.children}</Nav>}
      </Wrapper>
    );
  }
}

Menu.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
Menu.defaultProps = {
  title: '',
  category: '',
};

export default withRouter(Menu);
