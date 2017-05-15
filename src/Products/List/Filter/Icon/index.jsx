import React from 'react';
import { Wrapper, ButtonIcon } from './styled';
import filterIcon from './filter.png';

export default () => (
  <Wrapper>
    <ButtonIcon>
      <img src={filterIcon} alt="filter-icon" />
    </ButtonIcon>
  </Wrapper>
);
