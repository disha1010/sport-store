import React from 'react';
import cn from 'classnames/bind';
import PropTypes from 'prop-types';
import { Wrapper, StyledLink, ImageWrapper } from './styled';
import LabelOnSale from '../../LabelOnSale';

const Card = (props) => {
  const costClass = cn('item-cost', {
    'sale-cost': props.isOnSale,
  });

  return (
    <Wrapper>
      <StyledLink to={props.to}>
        <ImageWrapper>
          <img src={props.imageUrl} alt={props.imageAlt} />
          {props.isOnSale && <LabelOnSale />}
        </ImageWrapper>
        <div className={costClass}>{props.cost}$</div>
      </StyledLink>
    </Wrapper>
  );
};

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
