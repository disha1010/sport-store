import React from 'react';
import { ImageWrapper, Image } from './styled';

const itemPicFull = require('../../image/item-pic-full.png');

export default () => (
  <ImageWrapper>
    <Image src={itemPicFull} alt="shoes big" />
  </ImageWrapper>
  );
