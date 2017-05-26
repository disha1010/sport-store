import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: block;
  padding-top: 17px;
  padding-bottom: 17px;
  padding-left: 15px;
  margin: 0;
  @media screen and (min-width: 768px) {
    text-align: center;
    padding-top: 21px;
    padding-bottom: 21px;
    padding-left: 0px;
    margin: 0 auto;
  }
`;
export const Image = styled.img`
  @media screen and (min-width: 768px) {
  }
`;
