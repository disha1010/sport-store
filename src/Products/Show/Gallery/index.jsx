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

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.selectImg = this.selectImg.bind(this);
    this.state = {
      selectedImg: itemPicFull1,
    };
  }

  selectImg(img) {
    this.setState({ selectedImg: img });
  }
  render() {
    return (
      <Wrapper>
        <ImageWrapper>
          <BigImage alt="shoes big" src={this.state.selectedImg} />
        </ImageWrapper>
        <Thumbnails>
          <div className="item-img-container">
            <ButtonImage onClick={() => this.selectImg(itemPicFull1)}>
              <Slide src={itemPic1} alt="shoes slide" />
            </ButtonImage>
            <ButtonImage onClick={() => this.selectImg(itemPicFull2)}>
              <Slide src={itemPic2} alt="shoes slide" />
            </ButtonImage>
            <ButtonImage onClick={() => this.selectImg(itemPicFull3)}>
              <Slide src={itemPic3} alt="shoes slide" />
            </ButtonImage>
            <ButtonImage onClick={() => this.selectImg(itemPicFull4)}>
              <Slide src={itemPic4} alt="shoes slide" />
            </ButtonImage>
          </div>
        </Thumbnails>
      </Wrapper>
    );
  }
}
export default Gallery;
