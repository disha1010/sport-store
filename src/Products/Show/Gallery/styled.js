import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0px;
`;

export const ImageWrapper = styled.div`
  z-index: -10;
  padding-top: 4px;
`;
export const Image = styled.img`
  width: auto;
  @media screen and (max-width: 414px) {
    width: 100%;
  }
`;
export const Slide = styled.img`
  width: auto;
  @media screen and (max-width: 414px) {
    width: auto;
    height: 50px;
  }
`;
export const Thumbnails = styled.div`
  display: flex;
  align-items: center;
`;
export const ButtonImage = styled.button`
  cursor: pointer;  
  border: none;
  padding: 0px;
  background: none;
  margin-right: 10px;
  &:focus {
    border: 5px solid #e0e0e0;
    outline: none;
  }
`;
