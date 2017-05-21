import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GridWrapper = styled.div`
  padding-top: 22px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Wrapper = styled.div`
  position: relative;
  left: 0px;
  @media screen and (min-width: 768px) {
    width: calc(100% - 327px);
    left: 327px;
  }
  @media screen and (min-width: 1200px) {
    width: calc(100% - 414px);
    position: relative;
    left: 414px;
  }
`;
export const CardWrapper = styled.div`
  border: 9px solid #f4f4f4;
  margin-bottom: 17px;
  @media screen and (min-width: 1200px) {
    border: 12px solid #f4f4f4;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none
`;
export const ImageWrapper = styled.div`
  position: relative;
`;
export const Image = styled.img`
  width: 100%;
`;
export const Cost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Avenir next';
  font-size: 30px;
  width: 100%;
  padding-top: 28px;
  padding-bottom: 28px;
  border-top: 8px solid #f4f4f4;
  color: ${props => (props.isPurpleBackground ? '#fff' : '#0d0d0d')};
  background-image: ${props => (props.isPurpleBackground ? 'linear-gradient(107deg, #0c09bf, #966dd8)' : '#fff')};
`;
