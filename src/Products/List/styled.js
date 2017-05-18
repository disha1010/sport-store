import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GridWrapper = styled.div`
  padding-top: 22px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Wrapper = styled.div`
  width: calc(100% - 414px);
  position: relative;
  left: 414px;
  @media screen and (max-width: 1024px) {
    width: calc(100% - 327px);
    left: 327px;
  }
  @media screen and (max-width: 414px) {
    width: 414px;
    position: relative;
    left: 0px;
  }
`;
export const CardWrapper = styled.div`
  border: 12px solid #f4f4f4;
  margin-bottom: 17px;
  @media screen and (max-width: 2114px) {
    border: 9px solid #f4f4f4;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none
`;
export const ImageWrapper = styled.div`
  position: relative;
  @media screen and (max-width: 2114px) {
  }
`;
export const Image = styled.img`
  width: 100%;
`;
export const Cost = styled.div`
  height: 120.5px;
  border-top: 8px solid #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Avenir next';
  font-size: 30px;
  color: ${props => (props.isPurpleBackground ? '#fff' : '#0d0d0d')};
  background-image: ${props => (props.isPurpleBackground ? 'linear-gradient(107deg, #0c09bf, #966dd8)' : '#fff')};
  @media screen and (max-width: 2114px) {
    width: 100%;
    height: 91px;
    border-top: 6px solid #f4f4f4;
  }
`;
