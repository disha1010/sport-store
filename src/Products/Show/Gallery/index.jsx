import React from 'react';
import {
  Wrapper,
  ImageWrapper,
  Image,
  Slide,
  MoreImages,
  ButtonImage,
  Hamburger,
  HorizontalLine,
  ButtonSeeMore,
  SeeMore,
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
          <Slide src={itemPic1} alt="shoes slide" />
        </ButtonImage>
        <ButtonImage>
          <Slide src={itemPic2} alt="shoes slide" />
        </ButtonImage>
        <ButtonImage>
          <Slide src={itemPic3} alt="shoes slide" />
        </ButtonImage>
        <ButtonImage>
          <Slide src={itemPic4} alt="shoes slide" />
        </ButtonImage>
      </div>
      <Hamburger>
        <HorizontalLine />
        <HorizontalLine />
        <HorizontalLine />
      </Hamburger>
      <SeeMore>
        <ButtonSeeMore>see more photos</ButtonSeeMore>
      </SeeMore>
    </MoreImages>
  </Wrapper>
);
