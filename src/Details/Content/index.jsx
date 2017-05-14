import React from 'react';
import styled from 'styled-components';
import Info from './Info';
import Picture from './Picture';
import Gallery from './Gallery';
import Description from './Description';

export const Wrapper = styled.div`
  padding: 26px 37px 134px 31px;
  position: relative;
`;

export default () => (
  <Wrapper>
    <Info />
    <Picture />
    <Gallery />
    <Description />
  </Wrapper>
  );
