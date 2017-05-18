import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 26px 37px 0px 0px;
`;

export const ImageWrapper = styled.div`
  z-index: -10;
  margin-top: 18px;
  margin-left: 43px;
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
export const MoreImages = styled.div`
  display: flex;
  align-items: center;
`;
export const ButtonImage = styled.image`
  cursor: pointer;  
  border: none;
  padding: 0px;
  background: none;
`;
export const Hamburger = styled.div`
  width: 159px;
  margin-left: 28px;
  margin-right: 28px;
  @media screen and (max-width: 414px) {
    display: none;
  }
`;
export const HorizontalLine = styled.div`
  height: 3px;
  border: none;
  margin-top: 3px;
  margin-bottom: 3px;
  padding: 0px;
  border-radius: 1.5px;
  background-color: #e7e7e7;
`;
export const ButtonSeeMore = styled.button`
  cursor: pointer;  
  border: none;
  padding: 0px;
  background: none;
  width: 46px;
  height: 54px;
  display: block;
  font-size: 14px;
  text-align: left;
  color: #c0c0c0;
  font-family: 'San Francisco';
`;
export const SeeMore = styled.div`
  @media screen and (max-width: 414px) {
    display: none;
  }
`;
