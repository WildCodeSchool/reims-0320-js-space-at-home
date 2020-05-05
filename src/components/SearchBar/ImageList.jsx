import React from 'react';
import './SearchBar.css';

const ImageList = ({ images }) => images.map((image) => {
  if (image.links == null) {
    return null;
  }
  return <img src={image.links[0].href} className="ListImages" alt="" />;
});
export default ImageList;
