import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  border-bottom: 4px solid rgba(55,55,55,0.56);
  width: 370px;
  margin: 0 auto;
  padding-top: 21px;
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
  &:focus {
    border: none;
    outline: none;
  }
`;
