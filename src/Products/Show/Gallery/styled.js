import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0px;
`;

export const ImageWrapper = styled.div`
  z-index: -10;
  padding-top: 4px;
`;
export const BigImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: auto;
  }
    
`;
export const Slide = styled.img`
  width: 100%;
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
