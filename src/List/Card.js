import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import BannerOnSale from "../BannerOnSale"

export default props => {
  const banner = props.isOnSale
    ? <BannerOnSale />
    : undefined;
  const costClass = classNames("item-cost", {
    "sale-cost": props.isOnSale
  });

  return (
    <div className="item">
      <Link className="item-link" to={{pathname: props.to}} >
        <div className="item-img">
          <img src={props.imageUrl} alt={props.imageAlt} />
          {banner}
        </div>
        <div className={costClass}>{props.cost}$</div>
      </Link>
    </div>
  );
};
