import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import Products from './Products';
import './style.css';

const Wrapper = styled.div`
  width: calc(100% - 414px);
  position: relative;
  left: 414px;
`;

export default () => (
  <Wrapper>
    <Filter />
    <Products />
  </Wrapper>
);
