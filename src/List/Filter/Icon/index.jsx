import React from 'react';

import filterIcon from '../../../image/filter.png';

export default () => (
  <div className="filter-button-container">
    <button className="filter-button-icon">
      <img src={filterIcon} alt="filter-icon" />
    </button>
  </div>
);
