import styled from 'styled-components';

export default styled.aside`
  width: 100%;
  top: 0;
  position: relative;
  padding: 0px;
  background-color: #000;
  padding-top: 30px;
  @media screen and (min-width: 768px) {
    width: 327px;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    position: fixed;
  }
  @media screen and (min-width: 1200px) {
    width: 414px;
  }
`;
