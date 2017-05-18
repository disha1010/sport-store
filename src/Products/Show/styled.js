import styled from 'styled-components';

export const InfoWrapper = styled.div`

`;

export const Name = styled.h1`
  text-transform: uppercase;
  font-size: 64px;
  font-family: 'Avenir next';
  line-height: 1;
  text-align: left;
  color: #3a3a3a;
  display: inline-block;
  width: 226px;
  margin: 0px;
  position: absolute;
  top: 21px;
  @media screen and (max-width: 414px) {
    font-size: 32px;
    width: 100%;
    position: static;
  }
`;

export const Price = styled.h2`
  text-transform: uppercase;
  font-size: 80px;
  font-family: 'Avenir next';
  color: #e2e2e2;
  position: absolute;
  top: 87px;
  right: 31px;
  margin: 0px;
  @media screen and (max-width: 414px) {
    position: static;
    padding-top: 9px;
  }
`;
export const Colors = styled.div`
  position: absolute;
  top: 43px;
  right: 143px;
  @media screen and (max-width: 414px) {
    float: right;
    position: static;
    padding-top: 17px;
  }
`;
export const Save = styled.div`
  position: absolute;
  top: 168px;
  @media screen and (max-width: 414px) {
    display: none;
  }
`;

export const ButtonColor = styled.button`
  cursor: pointer;
  border: none;
  padding: 0px;
  background: ${props => props.theme.main};
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-left: 13px;
  &:focus {
    border: none;
    outline: none;
  }
`;

export const ButtonSave = styled.button`
  cursor: pointer;
  border: none;
  padding: 0px;
  background: none;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: #e3e3e3;
  color: #fff;
  font-size: 18px;
  font-family: 'Avenir next';
  text-transform: uppercase;
  &:focus {
    border: none;
    outline: none;
  }
`;
