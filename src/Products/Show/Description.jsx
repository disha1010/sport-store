import React from 'react';
import styled from 'styled-components';

export const Text = styled.div`
  color: #d8d8d8;
  font-family: 'Avenir next medium';
  margin-top: 29px;
  margin-bottom: 0px;
  font-size: 20px;
  line-height: 1.4;
  @media screen and (min-width: 768px) {
    font-size: 33px;
    line-height: 1.52;
  }
`;

export const Accent = styled.span`
  color: #6e6e6e
`;

export default () => (
  <Text>
    <Accent>Adidas</Accent>
    {' '}
    is a German multinational corporation, headquartered in Herzogenaurach, Germany,
    that designs and manufactures shoes, clothing and accessories.
  </Text>
);
