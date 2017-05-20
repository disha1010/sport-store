import styled from 'styled-components';

export const Nav = styled.div`
  padding-top: 15px;
  padding-bottom: 20px;
  display: block;
`;

export const SubmenuLink = styled.a`
  font-family: 'AndaleMono';
  padding-top: 26px;
  color: #3c3c3c;
  display: block;
  &:hover {
    color: #fff;
  }
  &:first-child {
    padding-top: 0px;
  } 
`;

export const SubmenuTitle = styled.div`
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
  color: #3c3c3c;
  padding-top: 30px;
  &:hover {
    color: #fff;
  }
  &:hover [fill] {
    fill: #fff;
  }
`;
