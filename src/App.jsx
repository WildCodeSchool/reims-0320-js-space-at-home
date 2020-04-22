import React from 'react';
import Navbar from './components/NavBar/Navbar';
import PictureDay from './components/Event/PictureDay';
import Categories from './components/Categories/Categories';
import SolarSystem from './components/SolarSystem/SolarSystem';
import SatellitesList from './components/Satellites/SatellitesList';


function App() {
  return (
    <>
      <div className="pageBlock">
        <Navbar />
        <PictureDay />
        <Categories />
        <SatellitesList />
      </div>
    </>
  );
}

export default App;
