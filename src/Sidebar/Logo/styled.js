import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import logo from './logo.png';
import mobileLogo from './mobile-logo.png';

export const StyledLink = styled(NavLink)`
  display: block;
  padding-top: 17px;
  padding-bottom: 17px;
  padding-left: 15px;
  margin: 0;
  @media screen and (min-width: 768px) {
    padding-top: 21px;
    padding-bottom: 21px;
    padding-left: 0px;
  }
`;
export const Image = styled.div`
  background: url("${mobileLogo}") no-repeat;
  width: 44px;
  height: 30px;
  border: none;
  @media screen and (min-width: 768px) {
    background: url("${logo}") no-repeat;
    width: 80px;
    height: 54px;
    margin: 0 auto;
  }
`;
