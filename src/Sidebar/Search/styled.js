import styled from 'styled-components';

export const Wrapper = styled.div`
  display:none;
  @media screen and (min-width: 768px) {  
    display: flex;
    width: 290px;
    border-bottom: 4px solid rgba(55,55,55,0.56);
    margin: 0 auto;
    padding-top: 20px;
  }
  @media screen and (min-width: 1200px) {
    width: 370px;
  }
  
`;
export const Icon = styled.img`
  width: 28px;
  height: 30px;
  padding-bottom: 10px;
  padding-left: 14px;
`;
export const Input = styled.input`
  background-color: #000;
  border: none;
  width: 300px;
  padding-right: 14px;
  padding-left: 14px;
  text-transform: uppercase;
  font-family: 'Avenir next';
  font-size: 24px;
  color: #3a3a3a;
  padding-bottom: 5px;
  &:focus {
    border: none;
    outline: none;
  }
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`;
