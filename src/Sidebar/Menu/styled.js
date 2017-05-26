import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
`;

export const Nav = styled.div`
  font-size: 24px;
  font-family: 'Avenir next';
  text-transform: uppercase;
  padding-top: 15px;
  padding-bottom: 20px;
  display: block;
  cursor: pointer;
`;
export const MenuIcon = styled.img`
  padding-right: 14px;
  padding-top: 17px;
  padding-bottom: 17px;
  @media screen and (min-width: 768px) {  
  display:none;
  }
`;
export const StyledLink = styled(Link)`
  font-family: 'AndaleMono';
  padding-top: 26px;
  padding-bottom: 26px;
  color: #3c3c3c;
  display: block;
  text-decoration: none;
  border-bottom: 1px solid #3c3c3c;
  padding-left: 30px;
  @media screen and (min-width: 768px) {
    border-bottom: none;
    padding-left: 0px;
    padding-bottom: 0px;
  }
  &:hover {
    color: #fff;
  }
  &:first-child {
    padding-top: 0px;
  } 
`;

export const ButtonTitle = styled.button`
  font-size: 24px;
  font-family: 'Avenir next';
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  padding: 0px;
  background: none;
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  padding-top: 30px;
  padding-left: 15px;
  @media screen and (min-width: 768px) {
    padding-left: 0px;
  }
  &:hover {
    color: #fff;
  }
  &:hover [fill] {
    fill: #fff;
  }
  &:focus{
    border: none;
    outline: none;
  }
`;
