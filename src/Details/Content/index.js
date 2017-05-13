import React from "react";
import Info from "./Info";
import Picture from "./Picture"
import Gallery from "./Gallery"
import Description from "./Description"
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 26px 37px 134px 31px;
  position: relative;
`;

export default () => {
  return (
    <Wrapper>
      <Info />
      <Picture />
      <Gallery />
      <Description />
    </Wrapper>
  );
};
