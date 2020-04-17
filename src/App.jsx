import React from 'react';
import Navbar from './components/NavBar/Navbar';
import PictureDay from './components/Event/PictureDay';
import Categories from './components/Categories/Categories';
import SolarSystem from './components/SolarSystem/SolarSystem';


function App() {
  return (
    <>
      <div className="pageBlock">
        <Navbar />
        <PictureDay />
        <Categories />
        <SolarSystem />
      </div>
    </>
  );
}

export default App;
