import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 114px;
  background-image: linear-gradient(to right, #4949aa, #27275d);
  display: flex;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: 5;
  width: 100%;
  left: 0px;
  @media screen and (min-width: 768px) {
    width: calc(100% - 327px);
    left: 327px;
  }
  @media screen and  (min-width: 1200px) {
    width: calc(100% - 414px);
    left: 414px;
  }
`;
const Button = styled.button`
  display: block;
  cursor: pointer;
  border: none;
  padding: 0px;
  background: none;
  font-family: 'Avenir next';
  font-size: 32px;
  text-transform: uppercase;
  color: #fff;
  &:focus {
    border: none;
    outline: none;
  }
`;

export default () => (
  <Wrapper>
    <Button>buy now</Button>
  </Wrapper>
  );
