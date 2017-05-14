import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
  padding-bottom: 11px;
  padding-top: 11px;
  border-bottom: 3px solid rgba(231,231,231,0.56);
`;
export const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 0px;
  background: none;
  text-transform: uppercase;
  font-size: 24px;
  font-family: 'Avenir next';
  color:  ${props => (props.isActive ? '#4d42f8' : '#d6d6d6')};
  &:focus{
    border: none;
    outline: none;
  }
`;
