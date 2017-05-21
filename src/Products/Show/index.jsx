import React from 'react';
import styled from 'styled-components';
import Info from './Info';
import Gallery from './Gallery';
import Description from './Description';
import BuyButton from './BuyButton';

const Wrapper = styled.div`
  position: relative;
  left: 0px;
  width:100%;
  @media screen and (min-width: 768px) {
    width: calc(100% - 327px);
    left: 327px;
  }
  @media screen and (min-width: 1200px) {
    left: 414px;
    width: calc(100% - 414px);
  }
`;
const ProductContainer = styled.div`
  padding: 35px 15px 57px 15px;
  position: relative;
  @media screen and (min-width: 768px) {
    padding: 25px 30px 134px 30px;
  }
`;

export default () => (
  <Wrapper>
    <ProductContainer>
      <Info />
      <Gallery />
      <Description />
    </ProductContainer>
    <BuyButton />
  </Wrapper>
);
