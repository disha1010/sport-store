import React from 'react';
import { StyledLink as Link, Image } from './styled';

import logo from './logo.png';

export default () => (
  <Link className="logo-img" to="/">
    <Image src={logo} alt="adidas-logo.png" />
  </Link>
);
