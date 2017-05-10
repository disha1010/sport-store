import React from "react";
import { Link } from "react-router-dom";
import shoes from "./img/shoes.png";
import shoes2 from "./img/shoes2.png";
import shoes3 from "./img/shoes3.png";

export default () => {
  return (
    <div className="goods-gallery">
      <div className="row">
        <div className="col-md-4">
          <div className="item">
            <a className="item-link" href="#">
              <div className="item-img">
                <img src={shoes} alt="shoes.png" />
                <span className="item-badge-sale">sale</span>
              </div>
              <div className="item-cost sale-cost">170$</div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="item">
            <a className="item-link" href="#">
              <div className="item-img">
                <img src={shoes2} alt="shoes.png" />
                <span className="item-badge-sale">sale</span>
              </div>
              <div className="item-cost sale-cost">230$</div>
            </a>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="item">
            <Link className="item-link" to="/shoe">
              <div className="item-img">
                <img src={shoes3} alt="shoes.png" />
                <span className="item-badge-sale">sale</span>
              </div>
              <div className="item-cost sale-cost">190$</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="item">
            <a className="item-link" href="#">
              <div className="item-img">
                <img src={shoes2} alt="shoes.png" />
              </div>
              <div className="item-cost">170$</div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="item">
            <a className="item-link" href="#">
              <div className="item-img">
                <img src={shoes3} alt="shoes.png" />
              </div>
              <div className="item-cost">230$</div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="item">
            <a className="item-link" href="#">
              <div className="item-img">
                <img src={shoes} alt="shoes.png" />
              </div>
              <div className="item-cost">190$</div>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="item">
            <a className="item-link" href="#">
              <div className="item-img">
                <img src={shoes} alt="shoes.png" />
                <span className="item-badge-sale">sale</span>
              </div>
              <div className="item-cost sale-cost">170$</div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="item">
            <a className="item-link" href="#">
              <div className="item-img">
                <img src={shoes2} alt="shoes.png" />
                <span className="item-badge-sale">sale</span>
              </div>
              <div className="item-cost sale-cost">230$</div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="item">
            <a className="item-link" href="shoes-details.html">
              <div className="item-img">
                <img src={shoes3} alt="shoes.png" />
                <span className="item-badge-sale">sale</span>
              </div>
              <div className="item-cost sale-cost">190$</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
