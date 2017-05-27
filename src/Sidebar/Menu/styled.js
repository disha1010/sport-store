import styled from 'styled-components';

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

export const ButtonTitle = styled.button`
  font-size: 24px;
  font-family: 'Avenir next';
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  padding: 0px;
  background: none;
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
