import React from 'react';
import styled from 'styled-components';
import Info from './Info';
import Gallery from './Gallery';
import Description from './Description';
import BuyButton from './BuyButton';
import './style.css';

const ProductContainer = styled.div`
  padding: 26px 37px 134px 31px;
  position: relative;
`;

const Wrapper = styled.div`
  width: calc(100% - 414px);
  position: relative;
  left: 414px;
  @media screen and (max-width: 1024px) {
    width: calc(100% - 327px);
    left: 327px;
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
