import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 114px;
  background-image: linear-gradient(to right, #4949aa, #27275d);
  display: flex;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  position: fixed;
  left: 414px;
  bottom: 0px;
  right: 0px;
  z-index: 5;
`;
export const Button = styled.button`
  display: block;
  cursor: pointer;
  border: none;
  padding: 0px;
  background: none;
  font-family: 'Avenir next';
  font-size: 32px;
  text-transform: uppercase;
  color: #fff;
  &:focus {
    border: none;
    outline: none;
  }
`;