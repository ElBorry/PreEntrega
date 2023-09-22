import React from 'react';

function CustomCarouselImage({ imagePath, altText }) {
  return (
    <img src={imagePath} alt={altText} />
  );
}

export default CustomCarouselImage;
