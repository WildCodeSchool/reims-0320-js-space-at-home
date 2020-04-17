import React from 'react';
import Navbar from './Navbar';
import PictureDay from './components/Event/PictureDay';
import Categories from './components/Categories/Categories';
import SolarSystem from './components/Event/SolarSystem';


function App() {
  return (
    <>
      <div className="pageBlock">
        <Navbar />
        <SolarSystem />
        <PictureDay />
        <Categories />
      </div>
    </>
  );
}

export default App;
