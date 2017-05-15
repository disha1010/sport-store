import React from 'react';
import {
  Wrapper,
  ImageWrapper,
  Image,
  MoreImages,
  ButtonImage,
  Hamburger,
  HorizontalLine,
  ButtonSeeMore,
} from './styled';

import itemPic1 from './item-pic-1.png';
import itemPic2 from './item-pic-2.png';
import itemPic3 from './item-pic-3.png';
import itemPic4 from './item-pic-4.png';
import itemPicFull from './item-pic-full.png';

export default () => (
  <Wrapper>
    <ImageWrapper>
      <Image src={itemPicFull} alt="shoes big" />
    </ImageWrapper>
    <MoreImages>
      <div className="item-img-container">
        <ButtonImage>
          <img src={itemPic1} alt="shoes slide" />
        </ButtonImage>
        <ButtonImage>
          <img src={itemPic2} alt="shoes slide" />
        </ButtonImage>
        <ButtonImage>
          <img src={itemPic3} alt="shoes slide" />
        </ButtonImage>
        <ButtonImage>
          <img src={itemPic4} alt="shoes slide" />
        </ButtonImage>
      </div>
      <Hamburger>
        <HorizontalLine />
        <HorizontalLine />
        <HorizontalLine />
      </Hamburger>
      <div className="item-imgs-see-more-container">
        <ButtonSeeMore>see more photos</ButtonSeeMore>
      </div>
    </MoreImages>
  </Wrapper>
);
