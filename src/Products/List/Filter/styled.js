import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-left: 15px;
  padding-bottom: 15px;
  padding-top: 15px;
  display: block;
  border-bottom: 3px solid rgba(231,231,231,0.56);
  @media screen and (min-width: 768px) {
    display: flex;
    padding-left: 24px;
    padding-bottom: 11px;
    padding-top: 11px;
  }
`;
export const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 0px;
  background: none;
  text-transform: uppercase;
  font-size: 24px;
  font-family: 'Avenir next';
  padding-right: 5px;
  color:  ${props => (props.isActive ? '#4d42f8' : '#d6d6d6')};
  &:focus{
    border: none;
    outline: none;
  }
`;
