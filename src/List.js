import React from "react"
import filter from './img/filter.png'
import shoes from './img/shoes.png'
import shoes_2 from './img/shoes_2.png'
import shoes_3 from './img/shoes_3.png'
import {Link} from 'react-router-dom'

export default () => {
  return (
    <div className="content">
      <div className="filter">
        <div className="filter-button-container">
          <button className="filter-button-icon">
            <img src={filter} alt="filter-icon.png" />
          </button>
        </div>
        <div className="filter-row-genders">
          <button className="filter-button-text filter-button-active">man</button>
          <button className="filter-button-text">women</button>
        </div>
        <div className="filter-row-sizes">
          <label className="filter-row-title">size</label>
          <div className="filter-row-values">
            <button className="filter-button-text">36</button>
            <button className="filter-button-text">37</button>
            <button className="filter-button-text">38</button>
            <button className="filter-button-text">39</button>
            <button className="filter-button-text">40</button>
            <button className="filter-button-text filter-button-active">41</button>
            <button className="filter-button-text">42</button>
          </div>
        </div>
      </div>
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
                  <img src={shoes_2} alt="shoes.png" />
                  <span className="item-badge-sale">sale</span>
                </div>
                <div className="item-cost sale-cost">230$</div>
              </a>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="item">
              <Link className="item-link" to="/Details">
                <div className="item-img">
                  <img src={shoes_3} alt="shoes.png" />
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
                  <img src={shoes_2} alt="shoes.png" />
                </div>
                <div className="item-cost">170$</div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <a className="item-link" href="#">
                <div className="item-img">
                  <img src={shoes_3} alt="shoes.png" />
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
                  <img src={shoes_2} alt="shoes.png" />
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
                  <img src={shoes_3} alt="shoes.png" />
                  <span className="item-badge-sale">sale</span>
                </div>
                <div className="item-cost sale-cost">190$</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
