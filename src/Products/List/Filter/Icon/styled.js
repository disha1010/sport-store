import styled from 'styled-components';

export const Wrapper = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    background-color: #ebebeb;
    width: 40px;
    height: 33px;
    padding-top: 11px;
    padding-bottom: 11px;
    padding-right: 7px;
    padding-left: 8px;
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
