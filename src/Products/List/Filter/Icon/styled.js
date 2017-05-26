import styled from 'styled-components';

export default styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    cursor: pointer;
    border: none;
    background: none;
    display: block;
    background-color: #ebebeb;
    padding-top: 11px;
    padding-bottom: 8px;
    padding-right: 7px;
    padding-left: 8px;
  }
`;
