import React from 'react';
import Aos from 'aos';
import './SearchBar.css';
import 'aos/dist/aos.css';


const ImageList = ({ images, badSearch }) => {
  if (badSearch === true) {
    return (
      <div>
        <p className="imageListError">No image found... Try with an other search</p>
      </div>
    );
  }
  return (
    <div className="ImageApi">
      {images.map((image) => {
        if (image.links == null) {
          Aos.init({ duration: 1200 });
          return null;
        }
        return <img data-aos="zoom-in" src={image.links[0].href} className="ListImages" alt="" />;
      })}
    </div>
  );
};

export default ImageList;
