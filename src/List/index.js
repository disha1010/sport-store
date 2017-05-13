import React from "react";
import Filter from "./Filter";
import List from "./List";
import "./style.css";
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: calc(100% - 414px);
  overflow-x: hidden;
  position: relative;
  left: 414px;
`;

export default () => {
  return (
    <Wrapper>
      <Filter />
      <List />
    </Wrapper>
  );
};
