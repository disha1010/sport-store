import React from "react";
import Card from "./Card";
const shoes = require(`../image/shoes.png`);
const shoes2 = require(`../image/shoes2.png`);
const shoes3 = require(`../image/shoes3.png`);

export default () => {
  return (
    <div className="goods-gallery">
      <div className="row">
        <div className="col-md-4">
          <Card
            imageUrl={shoes}
            imageAlt={"shoes.png"}
            showSaleBage={true}
            cost={170}
          />
        </div>
        <div className="col-md-4">
          <Card
            imageUrl={shoes2}
            imageAlt={"shoes2.png"}
            showSaleBage={true}
            cost={230}
          />
        </div>
        <div className="col-md-4">
          <Card
            imageUrl={shoes3}
            imageAlt={"shoes3.png"}
            showSaleBage={true}
            cost={190}
            link={true}
          />
        </div>
        <div className="col-md-4">
          <Card
            imageUrl={shoes2}
            imageAlt={"shoes2.png"}
            showSaleBage={false}
            cost={170}
          />
        </div>
        <div className="col-md-4">
          <Card
            imageUrl={shoes3}
            imageAlt={"shoes3.png"}
            showSaleBage={false}
            cost={230}
          />
        </div>
        <div className="col-md-4">
          <Card
            imageUrl={shoes}
            imageAlt={"shoes.png"}
            showSaleBage={false}
            cost={190}
          />
        </div>
      </div>
    </div>
  );
};
