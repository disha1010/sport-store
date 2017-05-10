import React from "react";
import bitmap_slide from './img/bitmap_slide.png'
import bitmap_slide_2 from './img/bitmap_slide_2.png'
import bitmap_slide_3 from './img/bitmap_slide_3.png'
import bitmap_slide_4 from './img/bitmap_slide_4.png'
import bitmap from './img/bitmap_3@3x.png'

export default () => {
  return (
    <div className="content">
      <div className="item-container">
        <div className="item-properties">
          <h1 className="item-title">ultra boost</h1>
          <div className="item-colors-container">
            <button className="button-color gray" />
            <button className="button-color blue" />
            <button className="button-color dark-gray" />
            <button className="button-color light-gray" />
          </div>
          <span className="item-badge-sale">sale</span>
          <h2 className="item-price">190$</h2>
          <div className="item-save-container">
            <button className="button-save">save</button>
          </div>
        </div>
        <div className="item-zoom-img">
          <img src={bitmap} alt="bitmap_3@3x.png" />
        </div>
        <div className="item-details">
          <div className="item-img-container">
            <button className="button-img">
              <img src={bitmap_slide} alt="bitmap_slide.png" />
            </button>
            <button className="button-img">
              <img src={bitmap_slide_2} alt="bitmap_slide_2.png" />
            </button>
            <button className="button-img">
              <img src={bitmap_slide_3} alt="bitmap_slide_3.png" />
            </button>
            <button className="button-img">
              <img src={bitmap_slide_4} alt="bitmap_slide_4.png" />
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
      <div className="item-buy-container">
        <button className="button-buy">buy now</button>
      </div>
    </div>
  );
};
