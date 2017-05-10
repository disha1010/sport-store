import React from 'react';
import itemPic1 from './img/item-pic-1.png'
import itemPic2 from './img/item-pic-2.png'
import itemPic3 from './img/item-pic-3.png'
import itemPic4 from './img/item-pic-4.png'
import itemPicFull from './img/item-pic-full.png'

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
          <img src={itemPicFull} alt="shoes big image.png" />
        </div>
        <div className="item-details">
          <div className="item-img-container">
            <button className="button-img">
              <img src={itemPic1} alt="shoes big image" />
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
      <div className="item-buy-container">
        <button className="button-buy">buy now</button>
      </div>
    </div>
  );
};
