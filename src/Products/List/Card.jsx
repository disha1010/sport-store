import React from 'react';
import PropTypes from 'prop-types';
import ProductLabel from '../../ProductLabel';
import { CardWrapper, StyledLink, ImageWrapper, Cost, Image } from './styled';

export const Card = props => (
  <CardWrapper>
    <StyledLink to={props.to}>
      <ImageWrapper>
        <Image src={props.imageUrl} alt={props.imageAlt} />
        {props.isOnSale && <ProductLabel>sale</ProductLabel>}
      </ImageWrapper>
      <Cost isPurpleBackground={props.isOnSale}>{props.cost}$</Cost>
    </StyledLink>
  </CardWrapper>
);

Card.propTypes = {
  to: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  isOnSale: PropTypes.bool,
  cost: PropTypes.number.isRequired,
};
Card.defaultProps = {
  to: '',
  imageUrl: '',
  imageAlt: '',
  isOnSale: false,
};

export default Card;
