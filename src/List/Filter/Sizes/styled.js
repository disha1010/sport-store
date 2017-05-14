import styled from 'styled-components';

export default styled.div`
  width: 76px;
  height: 32px;
  background-color: #ff5c5c;
  color: #fff;
  font-size: 14px;
  font-family: 'Avenir next';
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${props => (props.isDetails ? '35px' : '8px')};
  right: ${props => (props.isDetails ? '37px' : '8px')};
`;
