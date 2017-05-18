import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Image } from './styled';

import logo from './logo.png';

export default () => (
  <Wrapper>
    <Link className="logo-img" to="/">
      <Image src={logo} alt="adidas-logo.png" />
    </Link>
  </Wrapper>
);
