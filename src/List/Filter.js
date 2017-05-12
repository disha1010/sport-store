import React from "react";
const filter = require(`../image/filter.png`);

export default () => {
  return (
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
          <button className="filter-button-text filter-button-active">
            41
          </button>
          <button className="filter-button-text">42</button>
        </div>
      </div>
    </div>
  );
};
