import React from 'react';
import BackToTop from 'react-back-to-top-button';
import './ButtonTop.css';

function ButtonTop() {
  return (
    <BackToTop
      showOnScroll
      showAt={100}
      speed={1500}
      easing="easeInOutQuint"
    >
      <span className="buttonStyle">&#10514;</span>
    </BackToTop>
  );
}

export default ButtonTop;
