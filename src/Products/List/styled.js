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
  padding: 0px;
  width: 294px;
  height: 294px;
  border: 9px solid #f4f4f4;
  margin-bottom: 17px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none
`;
export const ImageWrapper = styled.div`
  width: 294px;
  height: 197px;
  position: relative;
`;
export const Cost = styled.div`
  height: 91px;
  border-top: 6px solid #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Avenir next';
  font-size: 30px;
  color: ${props => (props.isOnSale ? '#fff' : '#0d0d0d')};
  background-image: ${props => (props.isOnSale ? 'linear-gradient(107deg, #0c09bf, #966dd8)' : '#fff')};
`;
