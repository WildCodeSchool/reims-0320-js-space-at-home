import React from 'react';
import SimpleParallax from 'simple-parallax-js';

const Title = () => {
  const image = document.getElementsByClassName('thumbnail');
  new SimpleParallax(image, { scale: 1.5 }, { orientation: 'right' }, {overflow: true});

  return (
    <>
      <h1 className="firstTitle">Born In Space</h1>
      <img className="thumbnail" src="https://i.pinimg.com/originals/09/bb/62/09bb623bf83a706e860df279d1578127.jpg" alt="parallax" />
      <h1 className="firstTitle">Born In Space</h1>
    </>
  );

}

export default Title;
