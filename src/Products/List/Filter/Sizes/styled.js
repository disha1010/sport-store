import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-left: 0px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding-left: 50px;
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

export const SizeValues = styled.div`
  width: 254px;
  display: flex;
  justify-content: space-between;
`;
