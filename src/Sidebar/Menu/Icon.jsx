import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  padding-bottom: 4px;
  padding-left: 10px;
`;

export default () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="9"
    viewBox="0 0 14 9"
  >
    <g fill="#fff" fillRule="evenodd">
      <rect
        width="3"
        height="9"
        x="3"
        rx="1.5"
        transform="rotate(-45 4.5 4.5)"
      />
      <rect
        width="3"
        height="9"
        x="8"
        rx="1.5"
        transform="rotate(47 9.5 4.5)"
      />
    </g>
  </Svg>
);
