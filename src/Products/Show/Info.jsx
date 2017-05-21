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
    this.selectColor = this.selectColor.bind(this);
    this.state = {
      selectedColor: gray,
    };
  }

  selectColor(color) {
    this.setState({ selectedColor: color });
  }

  render() {
    return (
      <InfoWrapper>
        <Name>ultra boost</Name>
        <Price color={this.state.selectedColor}>190$</Price>
        <Colors>
          <ButtonColor color={gray} onClick={() => this.selectColor(gray)} />
          <ButtonColor color={blue} onClick={() => this.selectColor(blue)} />
          <ButtonColor color={darkGray} onClick={() => this.selectColor(darkGray)} />
          <ButtonColor color={lightGray} onClick={() => this.selectColor(lightGray)} />
        </Colors>
        <ProductInfoLabel>sale</ProductInfoLabel>
        <Save>
          <ButtonSave color={this.state.selectedColor}>save</ButtonSave>
        </Save>
      </InfoWrapper>
    );
  }
}

export default Info;
