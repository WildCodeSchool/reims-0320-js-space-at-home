import React from 'react';

const ImageList = ({ images }) => images.map((image) => {
  if (image.links == null) {
    return null;
  }
  return <img src={image.links[0].href} alt="" />;
});
export default ImageList;
