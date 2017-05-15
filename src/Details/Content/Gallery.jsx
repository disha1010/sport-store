import React from 'react';

import itemPic1 from '../../image/item-pic-1.png';
import itemPic2 from '../../image/item-pic-2.png';
import itemPic3 from '../../image/item-pic-3.png';
import itemPic4 from '../../image/item-pic-4.png';

export default () => (
  <div className="item-details">
    <div className="item-img-container">
      <button className="button-img">
        <img src={itemPic1} alt="shoes slide" />
      </button>
      <button className="button-img">
        <img src={itemPic2} alt="shoes slide" />
      </button>
      <button className="button-img">
        <img src={itemPic3} alt="shoes slide" />
      </button>
      <button className="button-img">
        <img src={itemPic4} alt="shoes slide" />
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
  );
