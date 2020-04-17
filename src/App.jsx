import React from 'react';
import PictureDay from './components/Event/PictureDay';
import Categories from './components/Categories/Categories';
import SolarSystem from './components/Event/SolarSystem';


function App() {
  return (
    <>
      <div className="pageBlock">
        <SolarSystem />
        <PictureDay />
        <Categories />
      </div>
    </>
  );
}

export default App;
