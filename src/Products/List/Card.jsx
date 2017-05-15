import React from 'react';
import styled from 'styled-components';
import cn from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LabelOnSale from '../../LabelOnSale';

const Wrapper = styled.div`
  padding: 0px;
  width: 294px;
  height: 294px;
  border: 9px solid #f4f4f4;
  margin-bottom: 17px;
`;
const StyledLink = styled(Link)`
  text-decoration: none
`;
const ImageWrapper = styled.div`
  width: 294px;
  height: 197px;
  position: relative;
`;

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
