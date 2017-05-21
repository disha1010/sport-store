import styled from 'styled-components';

export default styled.aside`
  width: 414px;
  background-color: #000;
  padding-top: 30px;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  @media screen and (max-width: 1024px) {
    width: 327px;
  }
  @media screen and (max-width: 414px) {
    width: 100%;
    top: 0;
    position: relative;
    padding: 0px;
  }
`;
