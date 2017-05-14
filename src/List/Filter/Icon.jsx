import React from 'react';

const filter = require('../../image/filter.png');

export default () => (
  <div className="filter-button-container">
    <button className="filter-button-icon">
      <img src={filter} alt="filter-icon.png" />
    </button>
  </div>
);
