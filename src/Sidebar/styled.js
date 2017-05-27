import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Aside = styled.aside`
  width: 100%;
  top: 0;
  position: relative;
  padding: 0px;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    display: block;
    padding-top: 30px;
    width: 327px;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    position: fixed;
  }
  @media screen and (min-width: 1200px) {
    width: 414px;
  }
`;

export const MenuWrapper = styled.nav`
  display: ${props => (props.isMobileOpened ? 'block' : 'none')};
  position: absolute;
  top: 64px;
  background-color: #000;
  width: 100%;
  z-index: 2;
  padding-bottom: 15px;
  @media screen and (min-width: 768px) {
    position: relative;
    top: 0px;
    display: block;
    padding-top: 120px;
    padding-bottom: 0px;
    text-align: center;
  }
`;

export const StyledLink = styled(NavLink)`
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
  &.active {
    color: #fff;
  }
`;
