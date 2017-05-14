import React from 'react';
// import { Grid, Row, Col } from 'react-flexbox-grid';
import { Wrapper, Icon, Input } from './styled';

const search = require('../../image/search.png');

export default () => (
  <Wrapper center="md">
    <Icon src={search} alt="search-icon" />
    <Input type="text" name="search" />
  </Wrapper>
);
