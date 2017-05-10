import React from "react";
import { Link } from "react-router-dom";

export default settings => {
  var banner;
  var costClass = "item-cost";
  if (settings.showSaleBage == true) {
    banner = <span className="item-badge-sale">sale</span>;
    costClass = "item-cost sale-cost";
  }

  return (
    <div className="col-md-4">
      <div className="item">
        <a className="item-link" href="#">
          <div className="item-img">
            <img src={settings.imageUrl} alt={settings.imageAlt} />
            {banner}
          </div>
          <div className={costClass}>{settings.cost}$</div>
        </a>
      </div>
    </div>
  );
};
