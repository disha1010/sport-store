import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import List from './List';
import './style.css';

export const Wrapper = styled.div`
  width: calc(100% - 414px);
  overflow-x: hidden;
  position: relative;
  left: 414px;
`;

export default () => (
  <Wrapper>
    <Filter />
    <List />
  </Wrapper>
);
