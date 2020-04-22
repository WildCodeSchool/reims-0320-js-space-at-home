import React from 'react';
import Navbar from './components/Navbar/Navbar';
import PictureDay from './components/Event/PictureDay';
import Categories from './components/Categories/Categories';
import SolarSystem from './components/SolarSystem/SolarSystem';
import Satellites from './components/Satellites/Satellites';


function App() {
  return (
    <>
      <div className="pageBlock">
        <Navbar />
        <PictureDay />
        <Categories />
        <Satellites />
      </div>
    </>
  );
}

export default App;
