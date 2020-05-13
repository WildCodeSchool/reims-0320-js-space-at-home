import React from 'react';
import Aos from 'aos';
import './SearchBar.css';
import 'aos/dist/aos.css';


const ImageList = ({ images }) => images.map((image) => {
  if (image.links == null) {
    Aos.init({ duration: 1200 });
    return null;
  }
  return <img data-aos="zoom-in" src={image.links[0].href} className="ListImages" alt="" />;
});
export default ImageList;
