import React from "react";
import Info from "./Info";
const itemPic1 = require(`../image/item-pic-1.png`);
const itemPic2 = require(`../image/item-pic-2.png`);
const itemPic3 = require(`../image/item-pic-3.png`);
const itemPic4 = require(`../image/item-pic-4.png`);
const itemPicFull = require(`../image/item-pic-full.png`);

export default () => {
  return (
    <div className="item-container">
      <Info />
      <div className="item-zoom-img">
        <img src={itemPicFull} alt="shoes big image.png" />
      </div>
      <div className="item-details">
        <div className="item-img-container">
          <button className="button-img">
            <img src={itemPic1} alt="shoes slide image" />
          </button>
          <button className="button-img">
            <img src={itemPic2} alt="shoes slide image" />
          </button>
          <button className="button-img">
            <img src={itemPic3} alt="shoes slide image" />
          </button>
          <button className="button-img">
            <img src={itemPic4} alt="shoes slide image" />
          </button>
        </div>
        <div className="item-imgs-expand">
          <hr className="horizontal-line" />
          <hr className="horizontal-line" />
          <hr className="horizontal-line" />
        </div>
        <div className="item-imgs-see-more-container">
          <button className="button-img">see more photos</button>
        </div>
      </div>
      <p className="item-description">
        <span className="accent">Adidas</span>
        {" "}
        is a German multinational corporation, headquartered in Herzogenaurach, Germany,
        that designs and manufactures shoes, clothing and accessories.
      </p>
    </div>
  );
};
