import React from 'react';
import { ImageWrapper, Image } from './styled';

import itemPicFull from '../../image/item-pic-full.png';

export default () => (
  <ImageWrapper>
    <Image src={itemPicFull} alt="shoes big" />
  </ImageWrapper>
  );
