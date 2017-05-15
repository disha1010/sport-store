import React from 'react';

import Wrapper from './styled';

import filterIcon from './filter.png';

export default () => (
  <Wrapper>
    <button className="filter-button-icon">
      <img src={filterIcon} alt="filter-icon" />
    </button>
  </Wrapper>
);
