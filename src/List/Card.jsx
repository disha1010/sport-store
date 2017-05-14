import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import LableOnSale from '../LableOnSale';

const Card = (props) => {
  const costClass = classNames('item-cost', {
    'sale-cost': props.isOnSale,
  });

  return (
    <div className="item">
      <Link className="item-link" to={{ pathname: props.to }}>
        <div className="item-img">
          <img src={props.imageUrl} alt={props.imageAlt} />
          {props.isOnSale ? <LableOnSale /> : null}
        </div>
        <div className={costClass}>{props.cost}$</div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  to: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  isOnSale: PropTypes.bool,
  cost: PropTypes.number.isRequired,
};
Card.defaultProps = {
  imageUrl: '',
  imageAlt: '',
  isOnSale: false,
};

export default Card;
