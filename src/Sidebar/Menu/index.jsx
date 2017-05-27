import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import ArrowIcon from './Icon';
import { Nav, ButtonTitle, Wrapper } from './styled';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpened: props.location.pathname.split('/')[2] === props.category,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(prevState => ({
      isOpened: prevState.isOpened ||
        nextProps.location.pathname.split('/')[2] === nextProps.category,
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
