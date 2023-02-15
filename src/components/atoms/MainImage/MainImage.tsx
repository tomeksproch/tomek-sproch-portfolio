import React from 'react';
import { ImageWrapper, ImageStyles } from './MainImage.styles';
import sprochImage from '../../../assets/images/tomasz-sproch-image.jpg';

const MainImage = () => {
  return (
    <ImageWrapper>
      <ImageStyles alt="TomaszSproch.jpg" src={sprochImage} />
    </ImageWrapper>
  );
};

export default MainImage;
