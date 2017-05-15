import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-left: 50px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 414px) {
    padding-left: 0px;
  }
`;

export const Title = styled.span`
  text-transform: uppercase;
  font-size: 24px;
  padding-right: 18px;
  font-family: 'Avenir next';
  color: #4d42f8;
  background-color: #fff;
`;
