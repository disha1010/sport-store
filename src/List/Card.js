import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

export default props => {
  const banner = props.showSaleBage
    ? <span className="item-badge-sale">sale</span>
    : undefined;
  const costClass = classNames("item-cost", {
    "sale-cost": props.showSaleBage
  });
  const linkTo = props.link ? "/shoe" : "#";

  return (
    <div className="item">
      <Link className="item-link" to={linkTo} href="#">
        <div className="item-img">
          <img src={props.imageUrl} alt={props.imageAlt} />
          {banner}
        </div>
        <div className={costClass}>{props.cost}$</div>
      </Link>
    </div>
  );
};
