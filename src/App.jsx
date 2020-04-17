import React from 'react';
import PictureDay from './components/Event/PictureDay';
import SolarSystem from './components/Event/SolarSystem';

function App() {
  return (
    <>
      <div className="pageBlock">
        <SolarSystem />
        <PictureDay />
      </div>
    </>
  );
}

export default App;
