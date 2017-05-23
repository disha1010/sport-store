import React from 'react';
import Submenu from './Submenu';

import { NavWrapper } from './styled';

export default () => (
  <NavWrapper>
    <Submenu title="football" />
    <Submenu title="running" />
    <Submenu title="basketball" />
  </NavWrapper>
);

// export default Navigation;
