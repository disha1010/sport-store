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

export const Title = styled.button`
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

