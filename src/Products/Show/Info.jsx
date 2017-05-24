import React, { Component } from 'react';
import styled from 'styled-components';
import ProductLabel from '../../ProductLabel';
import {
  InfoWrapper,
  Name,
  Price,
  Colors,
  Save,
  ButtonSave,
  ButtonColor,
} from './styled';

const gray = '#e0e0e0';
const blue = '#4d87ca';
const darkGray = '#4a4a4a';
const lightGray = '#c5c5c5';

const colors = [gray, blue, darkGray, lightGray];

const ProductInfoLabel = styled(ProductLabel)`
  position: static;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 25px;
    right: 30px;
  }
`;

class Info extends Component {
  constructor(props) {
    super(props);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.state = {
      color: colors[0],
    };
  }

  handleChangeColor(color) {
    this.setState({ color });
  }

  render() {
    return (
      <InfoWrapper>
        <Name>ultra boost</Name>
        <Price color={this.state.color}>190$</Price>
        <Colors>
          {colors.map(color => (
            <ButtonColor
              color={color}
              onClick={() => this.handleChangeColor(color)}
            />
          ))}
        </Colors>
        <ProductInfoLabel>sale</ProductInfoLabel>
        <Save>
          <ButtonSave color={this.state.color}>save</ButtonSave>
        </Save>
      </InfoWrapper>
    );
  }
}

export default Info;
