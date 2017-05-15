import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #ebebeb;
  width: 40px;
  height: 33px;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-right: 7px;
  padding-left: 8px;
  @media screen and (max-width: 414px) {
    display: none;
  }
`;

export const ButtonIcon = styled.div`
  cursor: pointer;
  border: none;
  padding: 0px;
  background: none;
  text-transform: uppercase;
  font-size: 24px;
  font-family: 'Avenir next';
  color: #d6d6d6;
`;
