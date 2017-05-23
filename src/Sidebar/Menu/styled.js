import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.nav`
  display:none;
  @media screen and (min-width: 768px) {
    display: block;
    font-size: 24px;
    font-family: 'Avenir next';
    text-transform: uppercase;
    padding-top: 120px;
    text-align: center;
  }
`;

export const Menu = styled.div`
`;

export const Nav = styled.div`
  padding-top: 15px;
  padding-bottom: 20px;
  display: block;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  font-family: 'AndaleMono';
  padding-top: 26px;
  color: #3c3c3c;
  display: block;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
  &:first-child {
    padding-top: 0px;
  } 
`;

export const Title = styled.div`
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  padding-top: 30px;
  &:hover {
    color: #fff;
  }
  &:hover [fill] {
    fill: #fff;
  }
`;

