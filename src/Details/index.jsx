import React from 'react';
import styled from 'styled-components';
import Content from './Content';
import Button from './Button';
import './style.css';

const Wrapper = styled.div`
  width: calc(100% - 414px);
  position: relative;
  left: 414px;
`;

export default () => (
  <Wrapper>
    <Content />
    <Button />
  </Wrapper>
  );
