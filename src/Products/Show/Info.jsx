import React from 'react';
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
  position: absolute;
  top: 25px;
  right: 30px;
  @media screen and (max-width: 414px) {
    position: static;
    margin-top: 10px;
  }
`;
export default () => (
  <InfoWrapper>
    <Name>ultra boost</Name>
    <Price>190$</Price>
    <Colors>
      <ButtonColor color={gray} />
      <ButtonColor color={blue} />
      <ButtonColor color={darkGray} />
      <ButtonColor color={lightGray} />
    </Colors>
    <ProductInfoLabel>sale</ProductInfoLabel>
    <Save>
      <ButtonSave>save</ButtonSave>
    </Save>
  </InfoWrapper>
);
