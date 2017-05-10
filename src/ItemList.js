import React from "react";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import shoes from "./img/shoes.png";
import shoes2 from "./img/shoes2.png";
import shoes3 from "./img/shoes3.png";

export default () => {
  return (
    <div className="goods-gallery">
      <div className="row">
        <ItemCard
          imageUrl={shoes}
          imageAlt={"shoes.png"}
          showSaleBage={true}
          cost={170}
        />
        <ItemCard
          imageUrl={shoes2}
          imageAlt={"shoes2.png"}
          showSaleBage={true}
          cost={230}
        />
        <ItemCard
          imageUrl={shoes3}
          imageAlt={"shoes3.png"}
          showSaleBage={true}
          cost={190}
        />
        <ItemCard
          imageUrl={shoes2}
          imageAlt={"shoes2.png"}
          showSaleBage={false}
          cost={170}
        />
        <ItemCard
          imageUrl={shoes3}
          imageAlt={"shoes3.png"}
          showSaleBage={false}
          cost={230}
        />
        <ItemCard
          imageUrl={shoes}
          imageAlt={"shoes.png"}
          showSaleBage={false}
          cost={190}
        />
      </div>
    </div>
  );
};
