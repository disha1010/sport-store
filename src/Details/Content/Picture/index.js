import React from 'react';
import {Wrapper, Image} from "./styled"

const itemPicFull = require('../../../image/item-pic-full.png');

export default () => (
  <Wrapper>
    <Image src={itemPicFull} alt="shoes big" />
  </Wrapper>
  );
