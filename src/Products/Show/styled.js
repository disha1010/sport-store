import styled from 'styled-components';

export const InfoWrapper = styled.div`

`;

export const Name = styled.h1`
  text-transform: uppercase;
  font-size: 64px;
  font-family: 'Avenir next';
  text-align: left;
  color: #3a3a3a;
  display: inline-block;
  width: 226px;
  margin: 0px;
  position: absolute;
  top: 21px;
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
`;
export const Colors = styled.div`
  position: absolute;
  top: 43px;
  right: 143px;
`;
export const Save = styled.div`
  position: absolute;
  top: 168px;
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
