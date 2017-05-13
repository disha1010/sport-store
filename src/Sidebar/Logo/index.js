import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from './styled';

const logo = require(`../../image/logo.png`);

export default () => {
  return (
    <Wrapper>
      <Link className="logo-img" to="/">
        <img src={logo} alt="adidas-logo.png" />
      </Link>
    </Wrapper>
  );
};
