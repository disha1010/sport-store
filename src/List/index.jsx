import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import Products from './Products';
import './style.css';

const Wrapper = styled.div`
  width: calc(100% - 414px);
  position: relative;
  left: 414px;
  @media screen and (max-width: 1024px) {
    width: calc(100% - 327px);
    left: 327px;
  }
  @media screen and (max-width: 414px) {
    width: 414px;
    position: relative;
    left: 0px;
  }
`;

export default () => (
  <Wrapper>
    <Filter />
    <Products />
  </Wrapper>
);
