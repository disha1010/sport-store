import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 77px;
  height: 52px;
  padding-top: 21px;
  padding-bottom: 21px;
  padding-left: 9px;
  padding-right: 9px;
  margin: 0 auto;
  @media screen and (max-width: 414px) {
    width: 52px;
    height: 52px;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 10px;
    margin: 0;
  }
`;
export const Image = styled.img`
  @media screen and (max-width: 414px) {
    width: 100%;
    padding-top: 8px;
    padding-bottom: 9px;
  }
`;
