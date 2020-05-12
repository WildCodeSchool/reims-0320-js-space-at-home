import React from 'react';
import SimpleParallax from 'simple-parallax-js';

const Title = () => {
  const image = document.getElementsByClassName('thumbnail');
  // new SimpleParallax(image, { scale: 1.5 }, { orientation: 'right' }, {overflow: true});

  return (
    <>
      <h1 className="firstTitle">Born In Space</h1>
    </>
  );

}

export default Title;
