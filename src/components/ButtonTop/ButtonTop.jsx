import React from 'react';
import BackToTop from 'react-back-to-top-button';

function App() {
  return (
    <BackToTop
      showOnScroll
      showAt={100}
      speed={1500}
      easing="easeInOutQuint"
    >
      <span>&#10514;</span>
    </BackToTop>
  );
}

export default App;
