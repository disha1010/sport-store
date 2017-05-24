import React, { Component } from 'react';
import {
  Wrapper,
  ImageWrapper,
  BigImage,
  Slide,
  Thumbnails,
  ButtonImage,
} from './styled';

import itemPic1 from './item-pic-1.png';
import itemPic2 from './item-pic-2.png';
import itemPic3 from './item-pic-3.png';
import itemPic4 from './item-pic-4.png';
import itemPicFull1 from './item-pic-full-1.jpg';
import itemPicFull2 from './item-pic-full-2.jpg';
import itemPicFull3 from './item-pic-full-3.jpg';
import itemPicFull4 from './item-pic-full-4.png';

const images = [
  { preview: itemPic1, full: itemPicFull1 },
  { preview: itemPic2, full: itemPicFull2 },
  { preview: itemPic3, full: itemPicFull3 },
  { preview: itemPic4, full: itemPicFull4 },
];

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.selectImg = this.selectImg.bind(this);
    this.state = {
      selectedImgId: 0,
    };
  }

  selectImg(imageId) {
    this.setState({ selectedImgId: imageId });
  }

  render() {
    return (
      <Wrapper>
        <ImageWrapper>
          <BigImage
            alt="shoes big"
            src={images[this.state.selectedImgId].full}
          />
        </ImageWrapper>
        <Thumbnails>
          {images.map((image, id) => (
            <ButtonImage onClick={() => this.selectImg(id)}>
              <Slide src={image.preview} alt="shoes slide" />
            </ButtonImage>
          ))}
        </Thumbnails>
      </Wrapper>
    );
  }
}
export default Gallery;
